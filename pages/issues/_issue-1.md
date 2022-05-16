---
template: layouts/issue

data:
  date: 2022-05-16
  title: This Week in Dart - Issue 1
  description: The second issue of This Week in Dart, I/O edition!
  weight: 1
---

Hello fellow Dartisans!
Welcome to the second issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This was an especially busy week for Dart as
Google I/O was this past week, May 11-12, available to stream online.

This year saw a lot of interesting content and announcements for developers
using Google products or services, including Dart 2.17 and Flutter 3.

To catch up with the Dart and Flutter announcements and learning materials,
see the [Flutter page][flutter-io] on the [Google I/O 2022][] site.

[flutter-io]: https://io.google/2022/products/flutter/
[Google I/O 2022]: https://io.google/2022

## Community updates

### Official

* [Dart 2.17: Productivity and integration](https://medium.com/dartlang/dart-2-17-b216bfc80c5d)
* [Introducing Flutter 3](https://medium.com/flutter/introducing-flutter-3-5eb69151622f)
* [What’s new in Flutter 3](https://medium.com/flutter/whats-new-in-flutter-3-8c74a5bc32d0)
* [Announcing the Flutter Casual Games Toolkit](https://medium.com/flutter/announcing-the-flutter-casual-games-toolkit-c22e401d8fee)

### Discussions

* [Filip reacts to Flutter 3 announcements at I/O](https://www.youtube.com/watch?v=MEYQUhJdv9c&t=2161s)
* [Let's Welcome Flutter 3.0 & Dart 2.17! Overview of new features!](https://www.youtube.com/watch?v=FGjtxGqSqnc)

### Learning materials

* [Flutter Concurrency: When, why, and how to multithread in Flutter](https://io.google/2022/program/5b1811d3-3bcb-4d30-b2a1-a098225029a7/)
* [Learn Dart Programming (by Codemy)](https://www.youtube.com/playlist?list=PLCC34OHNcOto7WU2QzVn3hnpSOYEdflVf)
* [Enum Members in Dart 2.17](https://github.com/vandadnp/flutter-tips-and-tricks/blob/main/tipsandtricks/enum-members-in-dart-2-17.md)

### Project releases and updates

* [package:powerd6 was released](https://pub.dev/packages/powerd6)<br>
  A collection of models to support the powerd6 ruleset.
* [package:eclass_api was released](https://pub.dev/packages/eclass_api)<br>
  A client for the Open eClass Platform mobile API.
* [package:chalkdart was released](https://pub.dev/packages/chalkdart)<br>
  Console text coloring and styling library for Dart.
* [package:curie was released](https://pub.dev/packages/curie)<br>
  Dart implementation of the W3C CURIE Syntax 1.0.
* [package:snapd 0.2.0 released](https://pub.dev/packages/snapd)<br>
  Provides a client to access snapd, which allows you to manage, search and install snaps on a Linux system.

## Dart SDK updates

31 unique authors have contributed
[98 commits][commit range]
to the Dart SDK in the past week.

[commit range]: https://github.com/dart-lang/sdk/compare/748ee46cf4710e3a9e45fa376db0164492e8f020...a251cd9b1e79fa927f1280014be73a317cbad951

The following are some handpicked, interesting changes.

* [Hint.UNUSED_RESULT to handle callable instances](https://github.com/dart-lang/sdk/commit/2aa31c90466ee5fe4d13337f181653ec6bda2444)
* [[analysis_server] Improve performance of LSP textDocument/codeActions with no range](https://github.com/dart-lang/sdk/commit/3c0289d618c2b30d708f7e8811ea7ae465a232ba)
* [[vm/simd] Add Float64x2 clamp simd implementation](https://github.com/dart-lang/sdk/commit/2a12dd3315421458b9818578f6ac996ceb6c1939)
* [[dart2wasm] Build platform dill and compile dart2wasm to AOT snapshots](https://github.com/dart-lang/sdk/commit/6c7604291c8520ffacfafe75b3f39974d6d7efdb)
* [[analysis_server] Switch to LSP v3.17 spec + regenerate types](https://github.com/dart-lang/sdk/commit/6b6a1998061c1d42607d31a5719844ad91d1ba06)
* [[vm, compiler] Shorter LoadImmediate sequences for RV64](https://github.com/dart-lang/sdk/commit/885d7843a739bcfe16f6cbcd14ce6544520c755b)
* [[vm/ffi] Support late Finalizable variables](https://github.com/dart-lang/sdk/commit/e418026d74b6c666a7fcb30278a2b10ed97fdb29)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Package of the week

The package of the week is [**rohd**](https://pub.dev/packages/rohd).

The Rapid Open Hardware Development (ROHD) framework
is a framework by Intel 
for describing and verifying hardware
in the Dart programming language. 
ROHD enables you to build and traverse a graph of connectivity
between module objects using unrestricted software.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.


## Upcoming events

Find an event near you or online and
connect with other Dart developers!

Always be sure to check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
for more events as well.

Let us know about other future events on
the [events discussion board][].

### Virtual

* TODO


## Quotes and notes

TODO

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!


## Dart jobs

The following are some jobs that will provide you the opportunity
to use or even build Dart.

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board.

### Google

- The Dart and Flutter teams have job openings across a wide variety of roles.
  See [Flutter and Dart team job openings][] for more information.

### Very Good Ventures

- [Senior Flutter Engineer (United States)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superlist

- [Senior Flutter (Desktop) Developer (Remote)](https://superlist.recruitee.com/o/senior-flutter-desktop-developer-mfd)


[Flutter Meetup Network]: https://www.meetup.com/pro/flutter
[Dart Meetup]: https://www.meetup.com/topics/dart-language/
[Flutter and Dart team job openings]: https://dart.dev/jobs
[GitHub]: https://github.com/parlough/thisweekindart
[GitHub discussions]: https://github.com/parlough/thisweekindart/discussions
[events discussion board]: https://github.com/parlough/thisweekindart/discussions/5
[quotes discussion board]: https://github.com/parlough/thisweekindart/discussions/3
[suggesting a package]: https://github.com/parlough/thisweekindart/discussions/2
[Job postings for Dart]: https://github.com/parlough/thisweekindart/discussions/4
[Unofficial Dart Community Discord]: https://discord.gg/Qt6DgfAWWx

