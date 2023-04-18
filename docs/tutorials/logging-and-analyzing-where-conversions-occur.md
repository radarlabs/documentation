---
sidebar_position: 8
title: Logging and analyzing where conversions occur
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Alert from "../../src/components/Alert";

<Alert alertType="info">
  Conversions are available on the {` `}
  <a href="https://radar.com/pricing" target="_blank">Enterprise plan</a>
  .
</Alert>

In this tutorial, we show you how to use Radar's [conversions API](/api#log-a-conversion) to analyze the location context associated with key customer interactions. Conversions can represent anything from a purchase or signup to engagement with an in-app feature.

When these events are enriched with Radar's location context, they can be used to determine where these conversions occur and measure the value of location based features.

## Languages used

- Swift
- Kotlin

## Features used

- [iOS SDK](/sdk/ios)
- [Android SDK](/sdk/android)
- [Conversions API](/api#log-a-conversion)

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
To take advantage of Radar's conversions API, you need to identify the events that are important to your business. Here are some examples:

| Event name | Example purpose                                                                                                     | Placement                           | Event properties                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------------------------------------------------------------------------|
| `purchase`   | Measure the revenue driven from location-enabled features | After a user makes a purchase              | `revenue` (number) <br /> `pickup` (boolean) <br /> `in_store_mode` (boolean) |
| `order_placed`  | Understand where users are placing orders within the app to prioritize personalized features                       | After a user places an order      | `revenue` (number) <br /> `applied_coupon` (boolean)                                                                             |
| `sign_up`    | Measure which stores are driving sign ups through store promotions                                               | After a user completes the signup flow | `referrer` (string) <br /> `rewards` (boolean)                                            |
| `product_search`    | Understand where customers are searching for products (i.e., in specific stores or at competitor locations)                                               |  | `section` (string)                                         |

### Step 4: Set up Radar geofences or places

On the [Geofences page](https://radar.com/dashboard/geofences), import geofences for your locations. For places, on the [Settings page](https://radar.com/dashboard/settings), monitor your desired place chains and categories. When processing conversions, Radar will determine if they happen at any of these geofences or places.

### Step 5: Log conversions via the Radar SDK

The following example demonstrates how to log a conversion when a user makes a purchase.

<Tabs
  groupId="conversions"
  defaultValue="swift"
  values={[
    { label: 'Swift', value: 'swift' },
    { label: 'Kotlin', value: 'kotlin' }
  ]}
>
  <TabItem value="swift">

```swift
// on making a purchase
Radar.logConversion(
  name: "purchase",
  revenue: 12.50,
  metadata: ["product":"shirt"]
) { (status, event) in
  print("Logged conversion: status = \(Radar.stringForStatus(status)); event = \(String(describing: event))")
}
```

  </TabItem>
  <TabItem value="kotlin">

```kotlin
// on searching for a product
val metadata = JSONObject(mapOf("product" to "shirt"))
Radar.sendEvent(
    "purchase",
    12.50,
    metadata
) { status, event ->
    Log.v("example", "Conversion = ${event?.type}: status = $status; event = $event")
}
```
  </TabItem>
</Tabs>

### Step 6: Conversions overview in the Radar dashboard
The [Report](https://radar.com/dashboard/report&view=conversions) page of the Radar dashboard has a _Conversions_ tab that provides an overview of all conversions logged for a project. Understand how engagement with your app differs between opted-in and opted-out users. See the total revenue across all conversions that have been logged with the `revenue` parameter.

The below is an example of a fully populated _Conversions_ page with engagement metrics and logged conversions with and without a `revenue` amount:
![Conversions report page](/img/tutorials/conversions-report-page.png)


### Step 7: Analyze conversions across location context types
You can see when and where conversions were generated directly in the Radar dashboard. On the [Events](https://radar.com/dashboard/events) page, watch as conversions start to stream in:

![Conversion events feed](/img/tutorials/conversion-events-feed.png)

Click the _View_ icon on the right to view a conversion's details:
![Conversion event detail page](/img/tutorials/conversion-event-detail-page.gif)

Finally, select _Analysis_ within the dropdown on the [Events](https://radar.com/dashboard/events) page to view all of your conversions sliced by different dimensions, such as place chain or geofence tag:

![Conversion events analysis](/img/tutorials/conversion-events-analysis.png)
