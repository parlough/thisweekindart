---
template: layouts/issue

data:
    date: 2022-06-20
    title: This Week in Dart - Issue 7
    description: The seventh issue of This Week in Dart!
    weight: 7
---

Hello fellow Dartisans!
Welcome to the seventh issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

The next stable release of Dart, likely 2.18,
will see the removal of the deprecated `dart2js` and `dartdevc` commands.

To compile web applications for production,
instead use [`dart compile js`][],
and to develop web apps use tools like [`webdev`][].

A future release of Dart, possibly 2.19,
will see complete support for mixin of classes 
that don't extend `Object` removed.
See the [breaking change request][48167] for more information
on the change and migration help.

[`dart compile js`]: https://dart.dev/tools/dart-compile#js
[`webdev`]: https://dart.dev/tools/webdev
[48167]: https://github.com/dart-lang/sdk/issues/48167

## Community updates

### Discussions

- [Dart is Boring](https://akos.ma/blog/dart-is-boring/)
- [Dart as first language](https://www.reddit.com/r/dartlang/comments/vgggno/dart_as_first_language/)
- [Build a CLI Tool with Dart](https://www.youtube.com/watch?v=5uH9o0V7oMk)
- [Supabase Happy Hour #8 - Let's grow wings and Flutter!](https://www.youtube.com/watch?v=E2JuTtk1LcI)

### Learning materials

- [Really Null Safety in Flutter/Dart](https://medium.com/flutter-students-club/really-null-safety-in-flutter-dart-56e2a70a3849)
- [Debouncer mixin for Dart](https://gist.github.com/demirdev/2d40166fe5c58cfa9d3399ede56f8520)
- [Merging maps in Dart](https://github.com/vandadnp/flutter-tips-and-tricks/blob/main/tipsandtricks/merging-maps-in-dart/merging-maps-in-dart.md)
- [Classes The Fast and Easy Way - Learn Dart Programming 13](https://www.youtube.com/watch?v=NwrEYB_YFVE)
- [Deploy Dart Server to Heroku - Server Deployment Tutorial](https://www.youtube.com/watch?v=nkTUMVNelXA)
- [5 Dart Tips - Flutter](https://www.youtube.com/watch?v=kCAHh5TnNL8)

### Project releases

* [package:mattermost_api was released](https://pub.dev/packages/mattermost_api)<br>
  An implementation of the Mattermost API as of 4.0.0.
* [package:fennec was released](https://pub.dev/packages/fennec)<br>
  A Dart web framework with the principal goal make
  server side web development easier and faster to develop.
* [package:h3_dart was released](https://pub.dev/packages/h3_dart)<br>
  A Dart version of the H3 Core library, a hexagon-based geographic grid system.
* [package:adderlink was released](https://pub.dev/packages/adderlink)<br>
  A Dart library for controlling Adderlink devices over a network.
* [package:couchdb_dart was released](https://pub.dev/packages/couchdb_dart)<br>
  A small simple package to make it easier to use a CouchDB server.

### Project updates

* [package:shelf_hotreload v1.3.0 was released](https://pub.dev/packages/shelf_hotreload/changelog#130)
* [package:protobuf v2.1.0 was released](https://pub.dev/packages/protobuf/changelog#210)
* [package:usage v4.1.0 was released](https://pub.dev/packages/usage/changelog#410)
* [package:enough_convert v1.6.0 was released](https://pub.dev/packages/enough_convert/changelog#160)
* [package:glob v2.1.0 was released](https://pub.dev/packages/glob/changelog#210)
* [package:w_common v2.0.0 was released](https://pub.dev/packages/w_common/changelog#200httpsgithubcomworkivaw_commoncompare1218200)
* [package:basics v0.8.0 was released](https://pub.dev/packages/basics/changelog#080)
* [package:simplytranslate v1.2.0 was released](https://pub.dev/packages/simplytranslate/changelog#120)
* [package:reflection_factory v1.2.0 was released](https://pub.dev/packages/reflection_factory/changelog#120)
* [package:geocore v0.9.0 was released](https://pub.dev/packages/geocore/changelog#090)
* [package:moment_dart v0.7.0 was released](https://pub.dev/packages/moment_dart/changelog#070)

## Dart SDK updates

35 unique authors have contributed
[141 commits](https://github.com/dart-lang/sdk/compare/1b9554d481ab61ab4c9196e0d2af5628987ae34d...651db75ff4ac0e11e5f0f6414c26a75c4ae50dde)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [Reland "[data driven] support moving symbols across packages"](https://github.com/dart-lang/sdk/commit/9a48d1b82f227d35cf8e1537374e4db7a828b07a)
* [[vm, gc] Remove the growth policy's hard limit when concurrent marking is available](https://github.com/dart-lang/sdk/commit/305c3e30c6aea9c05a1abec35eb5f7e09f716348)
* [[dart2wasm] Fix a number of minor JS interop issues](https://github.com/dart-lang/sdk/commit/76ccc89a10efff04c88e760236c29061af37b6f9)
* [[vm, gc] Parallelize scavenging large arrays](https://github.com/dart-lang/sdk/commit/837480f3f64d70faa9225b9693ad7a5c989d1e8b)
* [quick-fix to wrap in `unawaited`](https://github.com/dart-lang/sdk/commit/d2e006eefa1343fe554a72c78ae336194a92f053)
* [[vm, compiler] Implement all remaining assembly intrinsics for RISC-V](https://github.com/dart-lang/sdk/commit/ec54e588fcbd0dbce546389ebf34741d4cdc73f6)
* [[analyzer] Add a quick fix for avoid_renaming_method_parameters](https://github.com/dart-lang/sdk/commit/a60df664b3596d03479f99d075102bf6b8d1b77e)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Changes and improvements to the language specification
are continuously being discussed and implemented.

Recently, static programming through [macros][]
has been the focus of many discussions.
An in-progress proposal raising reflected imports
as a solution to some usability problems with macros
was added this week.

To learn more and perhaps comment on reflected imports,
see the [Reflected Imports Feature Specification][].

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

[macros]: https://github.com/dart-lang/language/blob/master/working/macros/feature-specification.md
[Reflected Imports Feature Specification]: https://github.com/dart-lang/language/blob/master/working/reflected-imports/feature-specification.md

 
## Package of the week

The package of the week is [**freezed**](https://pub.dev/packages/freezed)!

`package:freezed` is a package for Dart that provides
code generation for immutable classes 
and has a simple syntax/API without compromising on the features.

freezed provides many features focused around
generating classes representing models,
including support for data classes, unions,
pattern matching, handled serialization, and more.

You can learn more about freezed,
how to set it up, and how to use it
on its [pub page][freezed-pub].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[freezed-pub]: https://pub.dev/packages/freezed


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about other future events on
the [events discussion board][].


## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/SEGVeenstra/status/1537046803933282305">
        <p>All I need is @dart_lang</p>
    </blockquote>
    <figcaption>—Stephan E.G. Veenstra on <cite><a href="https://twitter.com/SEGVeenstra/status/1537046803933282305">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://akos.ma/blog/dart-is-boring/">
        <p>All in all, Dart is boring, and that’s its greatest feature.</p>
    </blockquote>
    <figcaption>—Adrian Kosmaczewski in <cite><a href="https://akos.ma/blog/dart-is-boring/">Dart is Boring</a></cite></figcaption>
</figure>

## Dart jobs

The following are some jobs that will provide you the opportunity
to use or even build Dart.

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board.

### Google

- The Dart and Flutter teams have job openings across a wide variety of roles.
  See [Flutter and Dart team job openings][] for more information.

### Workiva

- [Senior Software Engineer - Frontend Frameworks (Remote, US)](https://workiva.wd1.myworkdayjobs.com/en-US/careers/job/Senior-Software-Engineer---Frontend-Frameworks_R5084)
- [Other frontend jobs](https://workiva.wd1.myworkdayjobs.com/en-US/careers?q=frontend)

### Tonal

- [Mobile Engineer (Flutter) (NY, US)](https://jobs.lever.co/tonal/b47beb5f-ad20-4bdf-b28d-f1c3bf2273de)

### IBM

- [Senior Software Developer - Flutter (Remote, US)](https://careers.ibm.com/job/15419705/senior-software-developer-flutter-remote)
- [(Senior) Flutter Developer (Berlin, DE)](https://ibmix.de/job/u1597-senior-flutter-developer-w-m-x/)

### Very Good Ventures

- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superformula

- [Mobile Flutter Engineer (Remote, Americas)](https://careers.superformula.com/o/mobile-flutter-engineer-americas)


[Dart language repository]: https://github.com/dart-lang/language
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

