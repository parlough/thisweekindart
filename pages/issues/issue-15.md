---
template: layouts/issue

data:
    date: 2022-11-06
    title: This Week in Dart - Issue 15
    description: The fifteenth issue of This Week in Dart!
    weight: 15
---

Hello fellow Dartisans!
Welcome to the fifteenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

### Releases

This week saw the release of Dart 2.18.4,
a patch release with the following fixes and improvements:

* Fixed a crash during hot reload (Flutter issue [#113540](https://github.com/flutter/flutter/issues/113540))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).

### Breaking changes

A breaking change request has also been made this week
and is open for review and feedback:

- [Report all top-level inference circularities](https://github.com/dart-lang/sdk/issues/50383)

Head to the linked issue to learn more about the potential breaking change,
the reasoning behind it, its impact, and potential mitigations.
Feel free to leave comments or concerns.

Generally the Dart team strives to not make breaking changes,
and to preserve compatibility of all Dart programs
across stable Dart SDK releases,
but sometimes breaking changes are needed or justified.
To learn more about this process,
see [Dart SDK breaking change process][].

[Dart SDK breaking change process]: https://github.com/dart-lang/sdk/blob/main/docs/process/breaking-changes.md


## Community updates

### Official

- [Google Summer of Code 2022 Results](https://medium.com/dartlang/google-summer-of-code-2022-results-a3ce1c13c06c)

### Discussions

- [Intent to implement: dart:crypto](https://github.com/dart-lang/sdk/issues/50290)
- [Immutability: Dart vs. F#](https://www.christianfindlay.com/blog/immutability-dart-vs-fsharp)
- [RiverPod 2 0 Update](https://www.youtube.com/watch?v=tfB_dSJa9Oc)
- [Request for feedback on IDE/completion/analysis performance](https://twitter.com/mraleph/status/1587378933699428358)
- [Wouldn't it be nice if we could return after a null coalescence/ternary else operator?](https://www.reddit.com/r/dartlang/comments/yjb1xr/wouldnt_it_be_nice_if_we_could_return_after_a/)

### Learning materials

- [Dart – Type System](https://www.geeksforgeeks.org/data-types-in-dart/)
- [Future & Task: asynchronous Functional Programming](https://www.sandromaglione.com/techblog/async-requests-future-and-task-dart)
- [Flutter & Dart - The Complete Guide [2023 Edition]](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)
- [Reading CSV in Dart](https://dev.to/meamka/reading-csv-in-dart-2pfe)

### Project releases

* [package:type_graph was released](https://pub.dev/packages/type_graph)<br>
  Build graphs of your type hierarchies in your Dart/Flutter apps.
* [package:ruqe was released](https://pub.dev/packages/ruqe)<br>
  Brings the convenient types and methods found in Rust into Dart, 
  such as `Result`, `Option`, pattern-matching, etc.
* [package:mapify was released](https://pub.dev/packages/mapify)<br>
  Package for converting objects to similar objects inline
  with clean architecture.
* [package:dart_windows_service_support was released](https://pub.dev/packages/dart_windows_service_support)<br>
  Support for running Dart as a Windows service
* [package:looter was released](https://pub.dev/packages/looter)<br>
  A simple yet fully-featured web scraper
  for both static and dynamically generated web pages.

### Project updates

- [Dart Code (for VS Code) v3.52.0 was released](https://dartcode.org/releases/#v3520-2022-11-01)
- [package:dart_code_metrics v5.0.0 was released](https://pub.dev/packages/dart_code_metrics/changelog#500)
- [package:supabase v1.1.0 was released](https://pub.dev/packages/supabase/changelog#110)
- [package:git v2.2.0 was released](https://pub.dev/packages/git/changelog#220)
- [package:sass v1.56.0 was released](https://pub.dev/packages/sass/changelog#1560)
- [package:sentry v6.14.0 was released](https://pub.dev/packages/sentry/changelog#6140)
- [package:query v2.1.0 was released](https://pub.dev/packages/query/changelog#210)
- [package:either v0.3.0 was released](https://pub.dev/packages/either_dart/changelog#030---add-equality-and-hash-override)
- [package:rpi_gpio v0.8.0 was released](https://pub.dev/packages/rpi_gpio/changelog#080)


## Dart SDK updates

38 unique authors have contributed
[142 commits](https://github.com/dart-lang/sdk/compare/f552ffa782b321ea2bd6170d212d3be236764316...c387068e00bdb6411a1c6e20d62b2ec046b5c499)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[dart2wasm] Check bounds when allocating a list](https://github.com/dart-lang/sdk/commit/03b44f256f425d9cad98a1782b3d0fa5ce949879)
- [[analysis_server] Ensure code action fix priorities are respected even if de-duped](https://github.com/dart-lang/sdk/commit/00ca14fa230d3d65e6b3cb9cd0ce4b20947598b4)
- [[vm] Remove support for old native "<name>" syntax in VM](https://github.com/dart-lang/sdk/commit/251303f28f275442a5fcc255e2040da065978c72)
- [[vm] Fix coverage test regression](https://github.com/dart-lang/sdk/commit/e73cc6feb13965bfaf26d2fd80832ba047561206)
- [[dart2wasm] Implement function tear-offs](https://github.com/dart-lang/sdk/commit/ad5fc84106a11985b6c75ff913bf4881dc105790)
- [[VM/Service] Support records in the VM Service](https://github.com/dart-lang/sdk/commit/40defeeb44438089176e80f1694b619466e8bbf5)
- [[vm] Specialize allocation for small records](https://github.com/dart-lang/sdk/commit/b9dfd1a6517a5e11e333a4c0ba7d1a703458a2d2)
- [Fix for unnecessary string escape in a string interpolation](https://github.com/dart-lang/sdk/commit/81ebaee9a25eb15f8ff80b74811d64fd25caf1bc)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

View classes have not seen as much excitement around them
as records and patterns,
but work on the specification continues.

View classes can provide a replacement of the members
available on instances of existing types,
where the available members are determined by the static type.
These can act as "zero-cost abstractions",
not requiring a wrapping object.

This week saw a question about the potential of
supporting simple union types through views.
To learn more and comment, see [language issue #2603][2603].

To learn more about views, see the [Views feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Views tag][].

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[2603]: https://github.com/dart-lang/language/issues/2603
[Views feature specification]: https://github.com/dart-lang/language/blob/master/working/1426-extension-types/feature-specification-views.md
[Views tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Aviews


## Package of the week

The package of the week is [**dart_code_metrics**](https://pub.dev/packages/dart_code_metrics)!

`package:dart_code_metrics` is a static analysis tool
that helps you analyse and improve your code quality,
expanding on the basis provided by Dart's analyzer and linter!

It highlights a few core use cases:

- Reports code metrics
- Provides additional rules for the dart analyzer
- Checks for Dart anti-patterns
- Checks unused `*.dart` files
- Checks unused l10n
- Checks unnecessary nullable parameters
- Can be used as CLI, analyzer plugin, or library

As development teams and projects get larger,
it's useful to follow best practices,
keep your code consistent,
and avoid outdated, unnecessary, or unused code.
Dart Code Metrics can help you achieve that,
potentially increasing developer velocity on your project
or even helping you avoid potential issues!

Their team is open to feedback and community contributions
and are a great example of the Dart community
pushing development with Dart forward for everyone.

To learn more about `package:dart_code_metrics` and how to use it,
see its [page on the pub.dev site][code_metrics_pub]
and its [extensive documentation][code_metrics_site].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[code_metrics_pub]: https://pub.dev/packages/dart_code_metrics
[code_metrics_site]: https://dartcodemetrics.dev/docs/getting-started/introduction

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
    <blockquote cite="https://thisweekindart.dev/issues/issue-15">
        <p>Don't forget about Dart for building web apps!
           Compilation to wasm and improved JS-interop are both progressing well
           so Dart's web story is only going to keep improving!</p>
    </blockquote>
    <figcaption>—@parlough on <cite><a href="https://thisweekindart.dev/issues/issue-15">This Week in Dart</a></cite></figcaption>
</figure>

## Dart jobs

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board,
and we will be happy to include them here!


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
