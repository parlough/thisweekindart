---
template: layouts/issue

data:
    date: 2022-06-27
    title: This Week in Dart - Issue 8
    description: The eighth issue of This Week in Dart!
    weight: 8
---

Hello fellow Dartisans!
Welcome to the eighth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This week saw the release of Dart 2.17.5,
a patch release with the following fixes and improvements:

* Improved analysis of enhanced enums in switch statements (SDK issue [#49188](https://github.com/dart-lang/sdk/issues/49188))
* Fix compiler crash when initializing `Finalizable` objects (SDK issue [#49075](https://github.com/dart-lang/sdk/issues/49075))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).

## Community updates

### Discussions

- [Dart and Flutter enable Allstar and Security Scorecards](https://opensource.googleblog.com/2022/06/Dart-and-Flutter-enable-Allstar-and-Security-Scorecards.html)
- [Soundness violation with self-written futures](https://github.com/dart-lang/sdk/issues/49345)

### Learning materials

- [Full-stack Dart with Simon Lightfoot: Pt 1](https://www.youtube.com/watch?v=AaQzV1LTmo0)

### Project releases

* [package:azure_cosmosdb was released](https://pub.dev/packages/azure_cosmosdb)<br>
  Azure Cosmos DB SQL API for Dart and Flutter.
* [package:opencl was released](https://pub.dev/packages/opencl)<br>
  A wrapper of the OpenCL library for the Dart programming language.
* [package:pubspec_builder was released](https://pub.dev/packages/pubspec_builder)<br>
  A builder for extracting the contents of pubspec.yaml into code.
* [package:dart_z3 was released](https://pub.dev/packages/dart_z3)<br>
  Dart bindings for the Z3 theorem prover library.
* [package:parchment was released](https://pub.dev/packages/parchment)<br>
  Platform-agnostic rich text document model based on the Delta format
  and used in the Feather editor.

### Project updates

* [package:sentry v6.6.0 was released](https://pub.dev/packages/sentry/changelog#660)
* [package:melos v2.5.0 was released](https://pub.dev/packages/melos/changelog#250)
* [package:cached v1.1.0 was released](https://pub.dev/packages/cached/changelog#110)
* [package:sass v1.53.0 was released](https://pub.dev/packages/sass/changelog#1530)
* [package:mono_repo v6.3.0 was released](https://pub.dev/packages/mono_repo/changelog#630)
* [package:github v9.3.0 was released](https://pub.dev/packages/github/changelog#930)
* [package:dom_builder v2.0.10 was released](https://pub.dev/packages/dom_builder/changelog#2010)
* [package:sunrise_sunset_calc v3.0.0 was released](https://pub.dev/packages/sunrise_sunset_calc/changelog#300)


## Dart SDK updates

30 unique authors have contributed
[106 commits](https://github.com/dart-lang/sdk/compare/651db75ff4ac0e11e5f0f6414c26a75c4ae50dde...bf3652e57f31e8e658ccbe6a3d853266e798d679)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [[vm, gc] Prevent multiple threads racing to finalize marking from triggering an extra (synchronous) GC](https://github.com/dart-lang/sdk/commit/baa870bfa734d02eee91192ac9c7c7ee0cb3b0ec)
* [[dart2js] Add deferred read/write path to serialization](https://github.com/dart-lang/sdk/commit/3d35ae434cf795c29cc6b7a3190370e1838b2720)
* [[vm, gc] Apply incremental marking back-pressure in proportion to internal allocation size](https://github.com/dart-lang/sdk/commit/2e4107c8aee8da6bd4c8173e0c130d873cc3b6cc)
* [Add quick fix for UNNECESSARY_FINAL](https://github.com/dart-lang/sdk/commit/f9984c267b7b197e16fc5e639e274d63f792ba21)
* [[vm, compiler] Use RISC-V's compare-and-branch for a shorter write barrier sequence](https://github.com/dart-lang/sdk/commit/0a8fda94b655079fe779f40a0a6076009d6217b8)
* [Deprecate `BidirectionalIterator`](https://github.com/dart-lang/sdk/commit/a08a5c5d6c41b301a34f5abb0d5232f8d41dd08d)
* [[analysis_server] ReplaceFinalWithConst to handle unnecessary `const`](https://github.com/dart-lang/sdk/commit/c979aa71d85df1cef37c2900d7f0d43068f9c00b)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Changes and improvements to the language specification
are continuously being discussed and implemented.

Recently, patterns and pattern matching have been explored as a solution
to some of the most commonly requests features and functionality.

To learn more and perhaps comment on patterns,
refer to the [Patterns Feature Specification][] 
and [Goals and Constraints][patterns-goals] documents.

One piece of the puzzle of patterns is the introduction of records,
a way to represent 
a series of positional fields and a collection of named fields.
This past week saw version 1.4 of the [Records Feature Specification][] released.

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

[Patterns Feature Specification]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md
[patterns-goals]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/goals-and-constraints.md
[Records Feature Specification]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/records-feature-specification.md

 
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
    <blockquote cite="https://www.reddit.com/r/dartlang/comments/vgrd20/comment/id3d4vs">
        <p>If you came from a Kotlin background, 
        there's not much you need to learn to be all caught up with Dart. 
        Like, there are so very few differences 
        that you can learn them while doing some actual work.</p>
    </blockquote>
    <figcaption>—sauloandrioli on <cite><a href="https://www.reddit.com/r/dartlang/comments/vgrd20/comment/id3d4vs">/r/dartlang</a></cite></figcaption>
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

### IBM

- [Senior Software Developer - Flutter (Remote, US)](https://careers.ibm.com/job/15419705/senior-software-developer-flutter-remote)
- [(Senior) Flutter Developer (Berlin, DE)](https://ibmix.de/job/u1597-senior-flutter-developer-w-m-x/)

### ByteDance

- [Flutter Engineer, Lark Innovations (CA, US)](https://jobs.bytedance.com/en/position/7068418698784540965/detail)

### Very Good Ventures

- [Flutter Engineer (Poland)](https://apply.workable.com/very-good-ventures/j/A6EE352EC7/)
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

