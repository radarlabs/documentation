---
sidebar_position: 5
title: Detecting location-based fraud
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

In this tutorial, we show you how to use the Radar [iOS SDK](/sdk) to detect location-based fraud. Location-based fraud in this context includes users who are either using a [proxy server](https://en.wikipedia.org/wiki/Proxy_server) or GPS spoofing (*mocking*) to fake their location in order to gain access to certain app features.

## Languages used

- Swift
- Kotlin

## Features used

- [iOS SDK](/sdk/ios)
- [Android SDK](/sdk/android)

## Steps

### Step 1: Sign up for Radar

If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free.

<a className="btn btn-large btn-primary" href="https://radar.com/signup">Get API Keys</a>

### Step 2: Install the Radar SDK

#### iOS
If you're starting from scratch, create a new Xcode project of type Single View App.

[Install the Radar SDK](/sdk) using CocoaPods or Carthage (recommended) or by [downloading the framework](https://github.com/radarlabs/radar-sdk-ios/releases) and dragging it into your project.

Initialize the SDK in your `AppDelegate` class with your publishable API key.

```swift
import UIKit
import RadarSDK

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        Radar.initialize(publishableKey: "prj_test_pk_...")

        return true
    }

}
```

#### Android
The best way to add the SDK to your project is via Gradle. See the [SDK installation guide](/sdk/android#install-sdk).

When your app starts, in application `onCreate()`, initialize the SDK with your publishable API key.

  ```kotlin
  import io.radar.sdk.Radar

  class MyApplication : Application() {

      override fun onCreate() {
          super.onCreate()

          Radar.initialize(this, "prj_test_pk...")
      }

  }
  ```

### Step 3: Check to see if a user is mocking or proxying

If monitoring location in the foreground (i.e. using `Radar.trackOnce()`):

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift' },
    { label: 'Kotlin', value: 'kotlin' }
  ]}
>
  <TabItem value="swift">

```swift
Radar.trackOnce(completionHandler: {(status,location,events,user) in
    if let user = user {
        if !user.mocked && !user.proxy {
        } else {
            // user is spoofing location or on a proxy. Message about block.
        }
    }   
}
```

  </TabItem>
  <TabItem value="kotlin">

```kotlin
Radar.trackOnce { status, location, events, user ->
    if (user != null) {
        if (!user.mocked && !user.proxy) {

        } else {
            // user is spoofing location or on a proxy. Message about block.
        }
    }
}
```
  </TabItem>
</Tabs>

If monitoring location in the background (i.e. using `Radar.startTracking()`): 

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift' },
    { label: 'Kotlin', value: 'kotlin' }
  ]}
>
  <TabItem value="swift">

```swift
func didUpdateLocation(_ location: CLLocation, user: RadarUser) {
    // check to ensure a user is neither proxying nor mocking
    if !user.mocked && !user.proxy {
        // let the user proceed with app action
    } else {
        // user is spoofing location or on a proxy. Message about block.
    }
}
```
</TabItem>
  <TabItem value="kotlin">

```kotlin
override fun onLocationUpdated(context: Context, location: Location, user: RadarUser) {
    // check to ensure a user is neither proxying nor mocking
    if (!user.mocked && !user.proxy) {
        // let the user proceed with app action
    } else {
        // user is spoofing location or on a proxy. Message about block.
    }
}
```

</TabItem>
</Tabs>

### (Optional) Step 4: Use Radar Regions to perform a third location check

 Radar's [Regions](/regions) functionality can be used to determine a user's regional context. Let's say your application requires a user to be in a specific city or region to unlock certain app functionality. An example solution would be to first check for proxying and mocking, and then as a third check, verify the user's regional location allows them to be eligible for your app's services:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift' },
    { label: 'Kotlin', value: 'kotlin' }
  ]}
>
  <TabItem value="swift">

```swift
func didUpdateLocation(_ location: CLLocation, user: RadarUser) {
    // check to ensure a user is neither proxying nor mocking
    if !user.mocked && !user.proxy {
        // check to make sure the user is in the state of Maryland
        if user.state?.code == "MD" {
            // let the user proceed with app action
        }
    }
}
```

</TabItem>
  <TabItem value="kotlin">

```kotlin
override fun onLocationUpdated(context: Context, location: Location, user: RadarUser) {
    // check to ensure a user is neither proxying nor mocking
    if (!user.mocked && !user.proxy) {
        // check to make sure the user is in the state of Maryland
        if (user.state?.code == "MD"){
            // let the user proceed with app action
        }
    }
}
```

</TabItem>
</Tabs>

## Support

Have questions or feedback on this documentation? Let us know! Email us at [support@radar.com](mailto:support@radar.com).
