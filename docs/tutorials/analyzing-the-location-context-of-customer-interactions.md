---
sidebar_position: 8
title: Analyzing the location context of customer interactions
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Alert from "../../src/components/Alert";

<Alert alertType="info">
  Custom events are available on the {` `}
  <a href="https://radar.com/pricing" target="_blank">Enterprise plan</a>
  .
</Alert>

In this tutorial, we show you how to use Radar's [custom events API](/api#send-a-custom-event) to analyze the location context associated with key customer interactions. Custom events can represent anything from a conversion or purchase to engagement with an in-app feature.

When these events are enriched with Radar's location context, they can be used to assess prioritization and measure the value of location based features.

## Languages used

- Swift
- Kotlin

## Features used

- [iOS SDK](/sdk/ios)
- [Android SDK](/sdk/android)
- [Custom events API](/api#send-a-custom-event)

## Steps

### Step 1: Sign up for Radar

If you haven't already, sign up for Radar to get your API key.

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
### Step 3: Determine the events you wish to track
To take advantage of Radar's custom events API, you need to determine events that are important to your business. Here are some examples:

| Event name | Example purpose                                                                                                     | Placement                           | Event properties                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------------------------|
| app_open   | Understand where users are engaging with the app to prioritize location personalized features                       | After home view load completes      | NA                                                                             |
| sign_up    | Measure which stores are driving sign ups through at store promotions                                               | After the sign up flow is completed | referrer: string <br /> rewards: boolean                                            |
| product_search    | Understand where customers are searching for products (i.e. in certain stores or at competitors)                                               |  | section: string                                         |
| purchase   | Measure revenue driven from in store mode powered by Radar, understand distance from store at time of purchase | After order submission              | amount: number <br /> mode: "pickup"\|"curbside" <br /> in_store_mode: boolean |

### Step 4: Setup Radar geofences or places

On the [Geofences page](https://radar.com/dashboard/geofences), import geofences for relevant locations and on the [Settings page](https://radar.com/dashboard/settings), setup relevant place chains and categories. When custom events are sent, Radar will determine if they are performed at any of these geofences or places.

### Step 5: Send custom events via the Radar SDK

The following example demonstrates how to send a custom event to Radar on user signup.

<Tabs
  groupId="custom-events"
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift' },
    { label: 'Kotlin', value: 'kotlin' }
  ]}
>
  <TabItem value="swift">

```swift
// on customer sign up
Radar.sendEvent(customType: "product_search", metadata: ["section":"furniture"]) { (status, location, events, user) in
  print("Send event: status = \(Radar.stringForStatus(status)); location = \(String(describing: location)); events = \(String(describing: events)); user = \(String(describing: user))")
}
```

  </TabItem>
  <TabItem value="kotlin">

```kotlin
// on customer sign up
val metadata = JSONObject(mapOf("section" to "furniture"))
Radar.sendEvent(
    "product_search",
    metadata
) { status, location, events, user ->
    Log.v("example", "Custom event type = ${events?.first()?.customType}: status = $status; location = $location; events = $events; user = $user")
}
```
  </TabItem>
</Tabs>

### Step 5: Use the Radar dashboard to view custom events
You can see when and where custom events were generated directly in the Radar dashboard. On the [Radar events](https://radar.com/dashboard/events) page, watch as custom events start to stream in:

![Custom events dashboard](/img/tutorials/custom-events-dashboard.png)

Click the **View** icon on the right-hand side to view details about a custom event:
![Custom events detail page](/img/tutorials/custom-events-detail-page.gif)

Finally, use the **Analysis** tool on the Radar event page to view all of your custom events sliced by different metrics:

![Custom events analysis](/img/tutorials/custom-event-analysis.png)