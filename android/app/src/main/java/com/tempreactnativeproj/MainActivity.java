package com.tempreactnativeproj;
import android.os.Bundle;

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends NavigationActivity {
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new DefaultReactActivityDelegate(
  //       this,
  //       // If you opted-in for the New Architecture, we enable the Fabric Renderer.
  //       DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
  //       // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
  //       DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
  //       );
  // }
  
}
