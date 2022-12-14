---
template: layouts/issue

data:
    date: 2022-12-12
    title: This Week in Dart - Issue 19
    description: The nineteenth issue of This Week in Dart!
    weight: 19
---

Hello fellow Dartisans!
Welcome to the nineteenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

### Dart 3

Dart 3 is scheduled for launch around mid 2023!
The primary change is [sound null safety][]
will be required.
There will also likely be some new features
such as patterns and records,
alongside some breaking changes.

To learn more about the path to Dart 3 as well as its
planned features and breaking changes,
checkout [The road to Dart 3: A fully sound, null safe language][].

[sound null safety]: https://dart.dev/null-safety
[The road to Dart 3: A fully sound, null safe language]: https://medium.com/dartlang/the-road-to-dart-3-afdd580fbefa

### Strict analyzer options

The Dart analyzer has long had support for a few "strong mode" options,
including `--no-implicit-dynamic` which reports an error
if type inference chooses `dynamic`
and `no-implicit-casts` which reports an error when a cast is made implicitly.
These modes have been deprecated and are expected to be removed in Dart 3.

If you'd like these and other strict checks in your projects,
you should migrate to the newer strict modes the analyzer supports.
To learn more about their functionality and how to enable them,
see [Enabling additional type checks][] on dart.dev.

[Enabling additional type checks]: https://dart.dev/guides/language/analysis-options#enabling-additional-type-checks


## Community updates

### Official

- [The road to Dart 3: A fully sound, null safe language](https://medium.com/dartlang/the-road-to-dart-3-afdd580fbefa)

### News stories

- [Google's Dart language soon won't take null for an answer](https://www.theregister.com/2022/12/09/google_dart_null_safety/)
- [Interest Growing in Dart and Flutter for Mobile](https://thenewstack.io/industry-observer-sees-growing-interest-in-dart-flutter/)

### Discussions

- [Go for Dart with Protocol Buffers](https://tech.craveiro.pt/go-for-dart-with-protocol-buffers)
- [Dart & Flutter with ChatGPT: Is it worth it?](https://codewithandrea.com/articles/dart-flutter-chatgpt/)
- [Join Tim Sneath's Dart private leaderboard for Advent of Code using Dart](https://twitter.com/timsneath/status/1598104634505433089)
- [Kevin Moore's little update on dart2wasm progress](https://twitter.com/kevmoo/status/1600973667638607872)
- [Language choices (Dart vs JavaScript)](https://www.reddit.com/r/dartlang/comments/ze2u9s/language_chocies/)
- [Differences between Dart and TypeScript](https://twitter.com/SandroMaglione/status/1601089080397176833)

### Learning materials

- [(Video) Dart's Variables and Data Types](https://www.youtube.com/watch?v=uZELNjhtoPk)
- [(Video) Operators in Dart](https://www.youtube.com/watch?v=R75slm233ks)
- [(Video) Optionals in Dart](https://www.youtube.com/watch?v=_boduzV5fws)
- [(Video) Late Keyword in Dart](https://www.youtube.com/watch?v=_tZipRS8zIQ)
- [(Video) Functions in Dart](https://www.youtube.com/watch?v=EpVgqc7jy9o)
- [(Video) Control Flow in Dart](https://www.youtube.com/watch?v=OUilCXGkL-w)
- [(Video) Dart + Postgres - Observable Flutter](https://www.youtube.com/watch?v=g76H6-MeHHk)
- [(Guide) Building Full Stack apps using Flutter and Dart Frog](https://somniosoftware.com/post/building-full-stack-apps-using-dart-with-flutter-and-dart-frog)
- [(Guide) Dart Futures: Chaining and Concurrency](https://betterprogramming.pub/dart-futures-chaining-and-concurrency-86dc5a89dd2b)
- [(Docs) Concurrency on the web](https://dart.dev/guides/language/concurrency#concurrency-on-the-web)
- [(Tips) Dart: code snippets for faster coding](https://mixable.blog/dart-code-snippets-for-faster-coding/)
- [(Docs) JetBrains Space Private Dart Package Repository Support](https://www.jetbrains.com/help/space/dart-package-repository.html)

### Project announcements

- [Zapp! December 22 Update (Dart-only mode)](https://invertase.io/blog/zapp-december-22-update)
- [Google's Blockly has support for generating Dart](https://developers.google.com/blockly)
- [OnePub Beta Announcement](https://onepub.dev/show/18c4071c-f838-41e4-a0b0-aee5533c4a63)
- [repl.it's Dart support updated to 2.18](https://replit.com/@replit/Dart)

### Project releases

- [package:cli_completion was released](https://pub.dev/packages/cli_completion)<br>
  Completion functionality for Dart Command-line Interfaces built using CommandRunner.
- [package:token_parser was released](https://pub.dev/packages/token_parser)<br>
  Intuitive token parser that includes grammar definition, tokenization, parsing, syntax error and debugging.
- [package:grpcgen was released](https://pub.dev/packages/grpcgen)<br>
  Command-line application for code generation for gRPC clients from gRPC Reflection.
- [package:dart_frog_web_socket was released](https://pub.dev/packages/dart_frog_web_socket)<br>
  WebSocket support for Dart Frog.
- [package:burst was released](https://pub.dev/packages/burst)<br>
  Lots of threading tools for executing jobs in parallel in various ways.
- [package:base83 was released](https://pub.dev/packages/base83)<br>
  Base83 encoding and decoding for Dart using the `dart:convert` interface.
- [package:file_system_access_api was released](https://pub.dev/packages/file_system_access_api)<br>
  Library to expose the File System Access Api from web platform.
- [package:at_chops was released](https://pub.dev/packages/at_chops)<br>
  Package for at_protocol cryptographic and hashing operations.

### Project updates

- [package:melos v2.9.0 was released](https://pub.dev/packages/melos/changelog#290)
- [package:faker v2.1.0 was released](https://pub.dev/packages/faker/changelog#210)
- [package:flutter_rust_bridge v1.54.0 was released](https://pub.dev/packages/flutter_rust_bridge/changelog#1540)
- [package:moment_dart v0.13.0 was released](https://pub.dev/packages/moment_dart/changelog#0130)
- [package:units_converter v2.1.0 was released](https://pub.dev/packages/units_converter/changelog#210)
- [package:ferry v0.13.0 was released](https://pub.dev/packages/ferry/changelog#0130)
- [package:twitter_api_v2 v4.7.0 was released](https://pub.dev/packages/twitter_api_v2/changelog#v470)
- [package:aws_s3_api v2.0.0 was released](https://pub.dev/packages/aws_s3_api/changelog#200)


## Dart SDK updates

38 unique authors have contributed
[121 commits](https://github.com/dart-lang/sdk/compare/a464fc354beb0a2fee278612ccd7855071ede058...a46de1c30cd3daf7710780c2a8a8b6e6d4a22836)
to the Dart SDK over the past two weeks.

The following are some handpicked, interesting changes:

- [[analyzer] Don't ask for subtypes for the same elements several times when searching for references](https://github.com/dart-lang/sdk/commit/b812517fac362db4b531c3350d1157815aceeec1)
- [[3.0 alpha] Bump version to 3.0.0](https://github.com/dart-lang/sdk/commit/7e0d92d69db953fb8bae451b52a5d80e9f1a1c4a)
- [[VM/runtime] Flip flag to make strong null safety the default](https://github.com/dart-lang/sdk/commit/606a64a743b80e5f21d7818e0d4119376083e1d1)
- [[analysis_server] Improve Snippet performance with caching and earlier filtering](https://github.com/dart-lang/sdk/commit/092bdb17d31f9c94092567acd83a08785e4c5a40)
- [[vm] Runtime type check in await](https://github.com/dart-lang/sdk/commit/66f1dee48cee1fe06699fb62d45f79d92f440293)
- [[dart2wasm] Implement missing features in dynamic invocations](https://github.com/dart-lang/sdk/commit/636232628bfb9f8aa1d8b16656d647c8c3cc2205)
- [[vm] Reorder fields on Thread to reduce code size on X64](https://github.com/dart-lang/sdk/commit/15c8dad750f277753be7024cff536eb1a423a320)
- [Begin implementing flow analysis for patterns](https://github.com/dart-lang/sdk/commit/ea9b19c2c46be44cdc1790425f0352eed7f15e6b)
- [[ddc] Add support for new native types](https://github.com/dart-lang/sdk/commit/c010e4ffbdfbfd1c086a660e32706c90ce7a89c3)
- [analysis_server: quick fixes for records](https://github.com/dart-lang/sdk/commit/315ff0b8a290f04cc9b023fe0b8f29788e4e138c)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

The last week saw continued work on [records][] and [patterns][]
in the SDK and its various tooling and compilers.

Give records a shot with a [dev build of the SDK][]
and by enabling the `records` experiment.
To learn how to enable experiments, see
[Using experiment flags with command-line tools][] and
[Using experiment flags with the Dart analyzer][].

In other news, what was previously known as view classes,
has been renamed to inline classes
along with some other changes.

Inline classes can provide a replacement of the members
available on instances of existing types,
where the available members are determined by the static type.
These can act as "zero-cost abstractions",
not requiring a wrapper object.

To learn more about or comment on inline classes, 
see the [Inline classes feature specification PR][].

To learn more about and contribute to discussion
around other potential changes to the Dart language,
visit the [Dart language repository][].

[dev build of the SDK]: https://dart.dev/get-dart/archive#dev-channel
[Using experiment flags with command-line tools]: https://dart.dev/tools/experiment-flags#using-experiment-flags-with-command-line-tools
[Using experiment flags with the Dart analyzer]: https://dart.dev/tools/experiment-flags#using-experiment-flags-with-command-line-tools
[records]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[patterns]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md
[Inline classes feature specification PR]: https://github.com/dart-lang/language/pull/2626


## Package of the week

The package of the week is
[**package:isolate_agents**](https://pub.dev/packages/isolate_agents)!

`package:isolate_agents` is a package intended
to make long-living isolates easier to work with.

The package introduces an `Agent` class,
implementing the [actor model][] for Dart,
enabling easier concurrent processing
with a built-in mechanism for communication.

To learn more about the package's background and functionality,
check out the blog post 
[isolate_agents: Easy Isolates for Flutter][].
For general information about concurrency,
see [Concurrency in Dart][].

The package has not yet had a stable release
and is looking for feedback on the design and implementation.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[actor model]: https://en.wikipedia.org/wiki/Actor_model
[isolate_agents: Easy Isolates for Flutter]: https://medium.com/@gaaclarke/isolate-agents-easy-isolates-for-flutter-6d75bf69a2e7
[Concurrency in Dart]: https://dart.dev/guides/language/concurrency


## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/reNotANumber/status/1600871940666916866">
        <p>After mid-2023: Taylor <span style="text-decoration: line-through">Swift</span> Dart</p>
    </blockquote>
    <figcaption>—@reNotANumber on <cite><a href="https://twitter.com/reNotANumber/status/1600871940666916866">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/jxstxn_____/status/1601304784161554432">
        <p>Really exited to see where Dart is going as CLI and Backend Language</p>
    </blockquote>
    <figcaption>—@jxstxn_____ on <cite><a href="https://twitter.com/jxstxn_____/status/1601304784161554432">Twitter</a></cite></figcaption>
</figure>


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about future events on
the [events discussion board][]
to include here!


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
