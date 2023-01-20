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

When these events are enriched with Radar's location context, they can be used to determine where these key interactions occur and measure the value of location based features.

## Languages used

- Swift
- Kotlin

## Features used

- [iOS SDK](/sdk/ios)
- [Android SDK](/sdk/android)
- [Custom events API](/api#send-a-custom-event)

## Steps

### Step 1: Sign up for Radar

If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free.

<a className="btn btn-large btn-primary" href="https://radar.com/signup">Get API Keys</a>

### Step 2: Install the Radar SDK

#### iOS
If you're starting from scratch, create a new Xcode project of type Single View App.

[Install the iOS SDK](/sdk/ios#install-sdk) using CocoaPods or Carthage (recommended) or by [downloading the framework](https://github.com/radarlabs/radar-sdk-ios/releases) and dragging it into your project.

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
The best way to add the SDK to your project is via Gradle. See the [Android SDK installation guide](/sdk/android#install-sdk).

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
### Step 3: Determine the events you want to track
To take advantage of Radar's custom events API, you need to identify the events that are important to your business. Here are some examples:

| Event name | Example purpose                                                                                                     | Placement                           | Event properties                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------------------------|
| `app_open`  | Understand where users are engaging with the app to prioritize personalized features                       | After loading the app completes      | NA                                                                             |
| `sign_up`    | Measure which stores are driving sign ups through store promotions                                               | After a user completes the signup flow | `referrer` (string) <br /> `rewards` (boolean)                                            |
| `product_search`    | Understand where customers are searching for products (i.e. in specific stores or at competitor locations)                                               |  | `section` (string)                                         |
| `purchase`   | Measure the revenue driven from in store mode and understand the distance from the store at the time of purchase | After a user submits an order              | `amount` (number) <br /> `mode` (string) <br /> `in_store_mode` (boolean) |

### Step 4: Set up Radar geofences or places

On the [Geofences page](https://radar.com/dashboard/geofences), import geofences for your locations. For places, on the [Settings page](https://radar.com/dashboard/settings), monitor your desired place chains and categories. When processing custom events, Radar will determine if they happen at any of these geofences or places.

### Step 5: Send custom events via the Radar SDK

The following example demonstrates how to send a custom event when a user searches for a product.

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
// on searching for a product
Radar.sendEvent(customType: "product_search", metadata: ["section":"furniture"]) { (status, location, events, user) in
  print("Send event: status = \(Radar.stringForStatus(status)); location = \(String(describing: location)); events = \(String(describing: events)); user = \(String(describing: user))")
}
```

  </TabItem>
  <TabItem value="kotlin">

```kotlin
// on searching for a product
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
You can see when and where custom events were generated directly in the Radar dashboard. On the [Events](https://radar.com/dashboard/events) page, watch as custom events start to stream in:

![Custom events dashboard](/img/tutorials/custom-events-dashboard.png)

Click the _View_ icon on the right to view a custom event's details:
![Custom events detail page](/img/tutorials/custom-events-detail-page.gif)

Finally, select _Analysis_ within the dropdown on the [Events](https://radar.com/dashboard/events) page to view all of your custom events sliced by different dimensions, such as place chain or geofence tag:

![Custom events analysis](/img/tutorials/custom-event-analysis.png)
