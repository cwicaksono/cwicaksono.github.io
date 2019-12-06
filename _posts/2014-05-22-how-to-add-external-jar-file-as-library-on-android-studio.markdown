---
layout: post
title: How to add External .jar file as library on Android Studio
---
Sometimes when we start to create Android application, we must include another .jar file to help development proccess more productive. Some library that i must used is android [async http library](https://github.com/loopj/android-async-http), google play service and google analytics.

When using Eclipse you just add it with right click on your project then choose build path then custom build path. Then you can add external .jar file from it. But on Android Studio maybe more simple than on Eclipse. Follow the steps below to add external .jar file on Android Studio.

1. Copy your .jar file into libs directory, libs directory locate on `ProjectDir/ModuleDir/libs`, you can do this on Finder or explorer or direct from Android Studio
2. Right click on your .jar file that located on point number one, then choose "Add as Library"

Now you can use an .jar file as library on your Android Studio, if you failed maybe you put on wrong libs directory.
