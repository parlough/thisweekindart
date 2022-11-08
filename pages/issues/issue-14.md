---
template: layouts/issue

data:
    date: 2022-10-31
    title: This Week in Dart - Issue 14
    description: The fourteenth issue of This Week in Dart!
    weight: 14
---

Hello fellow Dartisans!
Welcome to the fourteenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

While not new, we thought it would be worth calling out
some experimental platform support that Dart has in progress
and available in the `beta` and `dev` channels.

On those channels, versions 2.17.0-266 or later,
you can now find experimental builds
for RISC-V (RV64GC) on Linux.

Also on those channels, versions 2.18.0-66 or later,
you can find experimental builds
for ARM64 on Windows.

To download these builds,
see the download links or instructions
on the [Dart SDK Archive](https://dart.dev/get-dart/archive).

If you experience any issues trying the latest experimental builds,
make sure to [report an issue](https://github.com/dart-lang/sdk/issues)
to the Dart SDK with reproduction information.

## Community updates

### Official

- [Intent to implement: `dart:crypto`](https://github.com/dart-lang/sdk/issues/50290)

### Discussions

- [Building long strings through concatenation is quadratic in complexity ](https://github.com/dart-lang/sdk/issues/50304)
- [Do we need to ship the null safety migration tool in Dart 3.0?](https://github.com/dart-lang/sdk/issues/50319)

### Learning materials

- [Dart abstract classes](https://twitter.com/SandroMaglione/status/1586591763837423618)
- [Dart Unmodifiable Views](https://twitter.com/rexthecoder/status/1586115564833230849)
- [Dart Zones in 60 seconds](https://twitter.com/rexthecoder/status/1585003704134299649)
- [Catch Exceptions in Flutter Like Never Before!](https://www.youtube.com/watch?v=noNs58-CmSE)
- [Dart Future tutorial with examples](https://dev.to/tienbku/dart-future-tutorial-with-examples-kpo)
- [Flutter Riverpod 2.0: The Ultimate Guide](https://codewithandrea.com/articles/flutter-state-management-riverpod/)

### Project releases

* [package:injectable_http_service was released](https://pub.dev/packages/injectable_http_service)<br>
  Simple http service to use with injectable.
* [package:candies_lint was released](https://pub.dev/packages/candies_lints)<br>
  A plugin to help create custom lints quickly.
* [package:marked was released](https://pub.dev/packages/marked)<br>
  A simple Markdown parser for Dart to create your own custom Markdown syntax.

### Project updates

- [package:endeavor v1.0.0 was released](https://pub.dev/packages/endeavor/changelog)
- [package:async v2.10.0 was released](https://pub.dev/packages/async/changelog#2100)
- [package:puppeteer v2.17.0 was released](https://pub.dev/packages/puppeteer/changelog#2170)
- [package:stream_chat v5.1.0 was released](https://pub.dev/packages/stream_chat/changelog#510)
- [package:grpc v3.1.0 was released](https://pub.dev/packages/grpc/changelog#310)
- [package:crypton v2.1.0 was released](https://pub.dev/packages/crypton/changelog#210)
- [package:melos v2.8.0 was released](https://pub.dev/packages/melos/changelog#280)
- [package:mongo_dart v0.8.0 was released](https://pub.dev/packages/mongo_dart/changelog#080)
- [package:dart_jsonwebtoken v2.5.0 was released](https://pub.dev/packages/dart_jsonwebtoken/changelog#250)


## Dart SDK updates

35 unique authors have contributed
[132 commits](https://github.com/dart-lang/sdk/compare/1244294c093393a90d9024e7e54a5c72b1a3c35e...f552ffa782b321ea2bd6170d212d3be236764316)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[vm] Allocation sinking of records](https://github.com/dart-lang/sdk/commit/e70dec4e82efdf843c76cedbcbaaa29be3777b7d)
- [Deprecate FallThroughError](https://github.com/dart-lang/sdk/commit/c13676f2b7bc52951a770731e602e50426101cf8)
- [[vm/ffi] Outlining state transitions in AOT](https://github.com/dart-lang/sdk/commit/762c507553d8c92add2e9f38d52f4e042b32b2c5)
- [Enable the unnamed-libraries experiment by default in 2.19.0](https://github.com/dart-lang/sdk/commit/9896f1c64706cc7ef6e2eb52f0950174797da6f5)
- [[dart2wasm] Check bounds in list [] and []=](https://github.com/dart-lang/sdk/commit/7e87efd2e711d408c980cbfc30d8d4ae6d2fc5fb)
- [[vm, service] Include Smis in heap snapshots](https://github.com/dart-lang/sdk/commit/2d6037a144f85940e654359dae7b94a7c81bb3a6)
- [[cfe] Handle non-const records in const constructors](https://github.com/dart-lang/sdk/commit/41e04fc452f4d215a2be0ba98a32e61536de28a0)
- [Implement field promotion for the analyzer](https://github.com/dart-lang/sdk/commit/56dcbe8c8ed1a530a99a0cd485ff245840e9d6e9)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

This week saw a standalone specification for sealed types,
separate from the larger [type modifiers specification][],
which is a proposal for expanded capability modifiers for classes and mixins.

Sealed types are essential for [exhaustiveness checking][],
a core part of support for [patterns][].

At a high level, marking a type `sealed`,
prevents it from being directly constructed,
and all subtypes must be defined in the same library.
This allows all subtypes to be known,
enabling exhaustiveness checking when matching 
on a value with the sealed type.

[Records][] and other parts of [patterns][] have also
been seeing extensive implementation work
across all parts of the SDK over the past month,
and final touches around their language specifications
alongside fixes and improvements have been made as well.

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[type modifiers proposal]: https://github.com/dart-lang/language/blob/master/working/type-modifiers/feature-specification.md
[exhaustiveness checking]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/exhaustiveness.md
[Records]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[patterns]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Arecords


## Package of the week

The package of the week is the [Dart build ecosystem](https://github.com/dart-lang/build),
including packages such as [`package:build`][] and [`package:build_runner`][].

The Dart build system provides a way of generating files using Dart code,
where files are generated directly on disk and are incrementally built.
It's used across the ecosystem in tools and libraries
such as the underlying incremental Dart to JavaScript compilation
used in [`package:webdev`](https://pub.dev/packages/webdev)
through [`package:build_web_compilers`](https://pub.dev/packages/build_web_compilers)
or for code generation in
[`package:freezed`](https://pub.dev/packages/freezed) and
[`package:json_serializable`](https://pub.dev/packages/json_serializable).

The build system is flexible and extensible
and even supports configuration through
a `build.yaml` file 
and [`package:build_config`](https://pub.dev/packages/build_config).
Consider using it for in your next code generation project,
static site generator, or compilation tool.

To learn more about the Dart build system and how to use it,
see [`package:build_runner`][] and [`package:build`][] on pub.dev
as well its [docs on GitHub][build_docs].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[`package:build_runner`]: https://pub.dev/packages/build_runner
[`package:build`]: https://pub.dev/packages/build
[build_docs]: https://github.com/dart-lang/build/tree/master/docs
[daco-discuss]: https://github.com/blaugold/daco/discussions

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
    <blockquote cite="https://twitter.com/d0rich_dev/status/1586719819197517825">
        <p>Dart is an easy language to learn #dartlang</p>
    </blockquote>
    <figcaption>—@d0rich_dev on <cite><a href="https://twitter.com/d0rich_dev/status/1586719819197517825">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/timsneath/status/1587109058586505216">
        <p>Apologies to @override, @freezed, @experimental, @immutable
           and all the other innocent Twitter handles
           that we've tagged over the years by tweeting Dart code
           that contains annotations. 
           Thank goodness the Dart language
           doesn't include an @elonmusk annotation!</p>
    </blockquote>
    <figcaption>—@timsneath on <cite><a href="https://twitter.com/timsneath/status/1587109058586505216">Twitter</a></cite></figcaption>
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
