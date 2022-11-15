---
template: layouts/issue

data:
    date: 2022-11-14
    title: This Week in Dart - Issue 16
    description: The sixteenth issue of This Week in Dart!
    weight: 16
---

Hello fellow Dartisans!
Welcome to the sixteenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

### Deprecations

Multiple deprecations to error types will be made in `dart:core`
alongside Dart 2.19:

- Deprecated `FallThroughError`. Has not been thrown since Dart 2.0.
- Deprecated `RangeError.checkValidIndex` in favor of `IndexError.check`.
- Deprecated `IndexError` constructor in favor of `IndexError.withLength` constructor.

You should remove and migrate all use cases
of these now deprecated classes and constructors.


## Community updates

### Official

- [Flutter Surprise/Announcement on Jan 25, 2023](https://twitter.com/FlutterDev/status/1590026371417673728)

### Discussions

- [Considering deprecating and discontinuing package:oauth2](https://github.com/dart-lang/oauth2/issues/137)
- [`package:markdown` proposal to improve ease of use](https://github.com/dart-lang/markdown/pull/490)
- [Comparing Dart and TypeScript](https://blog.logrocket.com/comparing-dart-typescript/)
- [Seeking contributors for probability distributions library in Dart](https://www.reddit.com/r/dartlang/comments/yr20n4/seeking_contributors_for_probability/)

### Learning materials

- [(Video) Parallel Beauty - with Isolates into the Mandelbrot set](https://www.youtube.com/watch?v=IUs3Nd7FSqE)
- [(Video) Meet Mason: Intro to Templating and Custom Code Generation](https://www.youtube.com/watch?v=LXhgiF5HiQg)
- [(New book) Dart Apprentice: Fundamentals](https://www.kodeco.com/books/dart-apprentice-fundamentals)
- [(New book) Dart Apprentice: Beyond the Basics](https://www.kodeco.com/books/dart-apprentice-beyond-the-basics)
- [(Online tutorial) Dart Tutorial - Learn Dart Programming](https://dart-tutorial.com/)

### Project releases

- [very_unofficial_parser was released on GitHub](https://github.com/definitelyokay/very_unofficial_parser)<br>
  Fan-made, handmade, recursive-descent parser for the Dart programming language.
- [package:streamdeck was released](https://pub.dev/packages/streamdeck)<br>
  A Dart package for building plugins for the Elgato Stream Deck.
- [package:ease_http was released](https://pub.dev/packages/ease_http)<br>
  Based on Dart http package, makes http package more powerful and easier to use.
- [package:gcp was released](https://pub.dev/packages/gcp)<br>
  Utilities for running Dart code correctly on the Google Cloud Platform.
- [package:console_markdown was released](https://pub.dev/packages/console_markdown)<br>
  A console markdown for formatting and color, using chalk as a dependency. 
  No setup required, quick and easy to use.
- [package:pumli was released](https://pub.dev/packages/pumli)<br>
  PlantUML interface for Dart. 
  Provides easy PlantUML diagram conversion from Dart.
- [package:dino was released](https://pub.dev/packages/dino)<br>
  A Dart dependency injection library aimed to be flexible, 
  predictable, and easy to use.

### Project updates

- [Dart Code (for VS Code) v3.52.1 was released](https://dartcode.org/releases/#v3521-2022-11-02)
- [package:dart_frog v0.3.0 was released](https://pub.dev/packages/dart_frog/changelog#030)
- [package:ziggurat v0.55.0 was released](https://pub.dev/packages/ziggurat/changelog#0550)
- [package:unpub v2.1.0 was released](https://pub.dev/packages/unpub/changelog#210)
- [package:twitter_api_v2 v4.4.0 was released](https://pub.dev/packages/twitter_api_v2/changelog#v440)
- [package:at_client v3.0.44 was released](https://pub.dev/packages/at_client/changelog#3044)
- [package:slang v3.4.0 was released](https://pub.dev/packages/slang/changelog#340)
- [package:bones_ui v2.0.24 was released](https://pub.dev/packages/bones_ui/changelog#2024)


## Dart SDK updates

43 unique authors have contributed
[150 commits](https://github.com/dart-lang/sdk/compare/c387068e00bdb6411a1c6e20d62b2ec046b5c499...29c3fea3bf3aee14c22e628748fafbd2c33cc792)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[analyzer] Recursive top-level inference](https://github.com/dart-lang/sdk/commit/dab3697828e059a1b1756b0f303ed10056b637b2)
- [[vm/aot/tfa] Fix handling of type parameter nullability in factory constructors](https://github.com/dart-lang/sdk/commit/8ef9c6aab4b016644a6b811ac6fda374376757d0)
- [[analysis_server] Add a new warning when a colon is used as the separator for a default value](https://github.com/dart-lang/sdk/commit/289aa509cd4f078457faf50670bb2871c31b2718)
- [[vm] More efficient 'is' tests for record types](https://github.com/dart-lang/sdk/commit/10e96068618cc1b8f72ac0452f8de0c711928e5a)
- [[corelib] Deprecate checkValidIndex and avoid using it in the core library](https://github.com/dart-lang/sdk/commit/63b49dfc8ef255f39856e5a73ed8fbe465f2678a)
- [[analysis_server] Add a fix for implicit call tear-offs](https://github.com/dart-lang/sdk/commit/d6909d4740463ac2f15e4212d8462e6a72ee69b1)
- [[dart2wasm] Refactor function collector](https://github.com/dart-lang/sdk/commit/bdf996aa4835f83db630d27b0ab78433061f1db7)
- [[vm/compiler] Remove quadratic time spent verifying handle lifetime](https://github.com/dart-lang/sdk/commit/715866aed383e5bd4ca40c7a45d6f88d7e717ec4)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

This week saw the [patterns proposal][] be accepted
to be implemented in a future Dart version.
Beyond that, the [2.16 version][2-16-patterns] of
the patterns feature specification was released
updating the syntax of switch expressions
to eliminate `case` and `default`.

Beyond that,
the [1.1 version][1-1-sealed] of
the in-progress sealed types feature specification was released.
To avoid unnecessary breaking changes,
the `sealed` keyword is no longer a built-in identifier,
now relying on the context of preceding `mixin` or `class`.

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[patterns proposal]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md
[2-16-patterns]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md#216
[1-1-sealed]: https://github.com/dart-lang/language/blob/master/working/sealed-types/feature-specification.md#11

## Package of the week

The package of the week is [**mason_cli**](https://pub.dev/packages/mason_cli)
and the rest of the [mason ecosystem](https://github.com/felangel/mason).

`package:mason_cli` allows developers to create and consume
reusable templates called bricks.

The CLI tool has support for creating new bricks,
searching for existing breaks, installing and removing bricks,
and even bundling bricks like is done in [`package:very_good_cli`][].

To find or share bricks,
they even have a special site and platform,
[BricksHub](https://brickhub.dev/).

To learn more about the mason ecosystem and how to use the CLI,
see its [page on pub.dev](https://pub.dev/packages/mason_cli)
or Felix Angelov's [recent introduction at Flutter Vikings][mason-video].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[`package:very_good_cli`]: https://pub.dev/packages/very_good_cli
[mason-video]: https://www.youtube.com/watch?v=LXhgiF5HiQg

## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about future events on
the [events discussion board][]
to include here!

## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/craig_labenz/status/1591157045474242560">
        <p>If you like @typescript (I do), then you'll LOVE @dart_lang 💙</p>
    </blockquote>
    <figcaption>—@craig_labenz on <cite><a href="https://twitter.com/craig_labenz/status/1591157045474242560">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://discord.com/channels/823048554532700191/823070371313483797/1040284307358494770">
        <p>I like the enhanced enums</p>
    </blockquote>
    <figcaption>—@Skiotic on <cite><a href="https://discord.com/channels/823048554532700191/823070371313483797/1040284307358494770">the Dart Community Discord</a></cite></figcaption>
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
