---
layout: post
title: What is ACRA (Application Crash Report for Android)
---
When i create an Android application i found new problem when it still in development phase. When your project still on development state you need some tools that help you to trace all error message that found on e.printStackTrace() method. So i do research about that and i found ACRA (Application Crash Report for Android).

ACRA is tiny library that override force close method and collect all message and send it to server, and you can analyze this message to help your debug phase. Why i recommend you to try this tools is because sometimes when you create an Android application you never found any problem. But sometimes when other people (test user) trying to install your application on their devices they get crash.

There is several reason that make your application crash, some of them is OutMemoryOfError and warning message. I look at the latest operating system on android, they have a very strict rules. Espesially when you use Genymotion as your android simulator, in Genymotion there are much limitation like they grant all permission on manifest file and sometimes Genymotion not showing force close but if you trace on debug window (Eclipse or Android Studio) there are several messages.

So after that several reason i think will be better if we used some system that reporting any crash problem on app. I used ACRA to my latest project to help me debugging and it very helpfull for me.

If you want to read more about ACRA you can read it on their website [http://acra.ch/](http://acra.ch/) and i found some great tutorial that help me to setup ACRA to implement on my project, you can read it on [toptal](http://www.toptal.com/android/automated-android-crash-reports-with-acra-and-cloudant)
