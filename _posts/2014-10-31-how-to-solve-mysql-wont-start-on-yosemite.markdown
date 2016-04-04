---
layout: post
title: How to solve MySQL won't start on Yosemite
---
After i upgrade my MacBook Air into Yosemite there are major problem that disturbing me. The problem is MySQL server on MAMP wont start. But i think if i search on Google i will find how to solve it.

But for now i can keep calm because i can solve it, at least for now MAMP running normally.

Check your mysqld proccess and see port number that use on it by this command

```sh
lsof -Pni4 | grep LISTEN | grep mysqld
```

If you found proccess after executing that command you can kill mysqld proccess by using this command

```sh
kill [PID]
```

After kill mysqld proccess maybe you can validate is mysqld really "dead" using ```lsof``` command again

And if your mysqld proccess was dead, you can start MySQL from MAMP application.

*Yeay now i can use MAMP normally again

note: this method maybe not work for you, but it works for me now
