---
template: layouts/issue

data:
    date: 2022-11-21
    title: This Week in Dart - Issue 17
    description: The seventeenth issue of This Week in Dart!
    weight: 17
---

Hello fellow Dartisans!
Welcome to the seventeenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

### Pub repository field

If you haven't already and your package is open source,
consider specifying the [`repository` field][] in your `pubspec.yaml` file.
The package analysis tools and the pub.dev site
use the specified link to populate links on the package site
and in the future may use it for git repository verification.

[`repository` field]: https://dart.dev/tools/pub/pubspec#repository

### Deprecations

In Dart 2.19, using a colon (`:`) to separate a named parameter
from its default value will result in a warning by the analyzer.
While most code should already use an equal sign (`=`) already,
make sure your code is migrated.

You can enable the [`prefer_equal_for_default_values` lint][prefer-equal]
then use the [`dart fix`](https://dart.dev/tools/dart-fix) tool
to automatically transition all current usages and avoid future ones.

[prefer-equal]: https://dart.dev/tools/linter-rules#prefer_equal_for_default_values

## Community updates

### Discussions

- [Make `??` and `throw` work together](https://www.reddit.com/r/dartlang/comments/ywp236/make_and_throw_work_together/)
- [Building stable CLI apps](https://onepub.dev/Blog?id=fvvuhnofly)
- [Looking for users suffering from slow IDE / completion / analysis](https://twitter.com/mraleph/status/1587378933699428358)
- [Looking for users experiencing long build_runner runtimes](https://twitter.com/dersimolus/status/1593335753924399112)
- [Announcing Flutter Web and Desktop support for AWS Amplify Storage, Analytics and API libraries](https://aws.amazon.com/blogs/mobile/announcing-flutter-web-and-desktop-support-for-aws-amplify-storage-analytics-and-api-libraries/)
- [Change to analyzer snapshots bumps dart binary size](https://github.com/dart-lang/sdk/issues/50487)
- [(Video) What is Dart? | Dart Explained in 2 Minutes For BEGINNERS](https://www.youtube.com/watch?v=sOSd6G1qXoY)

### Learning materials

- [(Guide, Updated) Learning Dart as a JavaScript developer](https://dart.dev/guides/language/coming-from/js-to-dart)
- [(Video, Nov 22, 2022) Dart Frog on Flying High with Flutter](https://www.youtube.com/watch?v=iIzgX2oEfYU)

### Project releases

- [package:bolt was released](https://pub.dev/packages/bolt)<br>
  A lightning fast, strongly typed network protocol.
- [package:jb was released](https://pub.dev/packages/jb)<br>
  A modern Java build system that leverages Dartle
  to make building Java projects easy.
- [package:mastodon_api was released](https://pub.dev/packages/mastodon_api)<br>
  The easiest and powerful Dart/Flutter library for Mastodon API.
- [package:fredis was released](https://pub.dev/packages/fredis)<br>
  Redis client with simplicity and performance.
- [package:igodo was released](https://pub.dev/packages/igodo)<br>
  A novel symmetric encryption algorithm implemented in Dart.
- [package:steganograph was released](https://pub.dev/packages/steganograph)<br>
  A pure Dart steganography library 
  which supports hiding messages and files in images
  with an option to encrypt embedded secrets for more security.

### Project updates

- [package:reactter v4.0.0 was released](https://pub.dev/packages/reactter/changelog#400)
- [package:spider v4.1.0 was released](https://pub.dev/packages/spider/changelog#410)
- [package:pocketbase v0.5.0 was released](https://pub.dev/packages/pocketbase/changelog#050)
- [package:dart_github_actions v0.5.0 was released](https://pub.dev/packages/dart_github_actions/changelog#050)
- [package:mineral v2.0.0 was released](https://pub.dev/packages/mineral/changelog#200---release)
- [package:supabase v1.2.0 was released](https://pub.dev/packages/supabase/changelog#120)
- [package:nyxx v4.3.0 was released](https://pub.dev/packages/nyxx/changelog#430)


## Dart SDK updates

39 unique authors have contributed
[125 commits](https://github.com/dart-lang/sdk/compare/29c3fea3bf3aee14c22e628748fafbd2c33cc792...92908bd8e70abcd48ff2d271438fb12af55d2c11)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[analyzer] Complete completers when disposing](https://github.com/dart-lang/sdk/commit/d26cf07b106ff6aa31cb48fa1e046b8497789488)
- [[cfe] Patterns parsing: fix handling of builtin identifiers and pseudo-keywords](https://github.com/dart-lang/sdk/commit/1af3f76a6cd01a66cd69b344383d58eba4101c1a)
- [[dart2wasm] Move low-level int/double intrinsics to base classes](https://github.com/dart-lang/sdk/commit/a9cfad4e1f9f83aa17038b5bd0dc9a41a8f59545)
- [[vm/ffi] Add `Dart_IsNull` in `dart_api_dl.h`](https://github.com/dart-lang/sdk/commit/50e18b81609722e38204c300c65cae04d87eadb0)
- [[dartdevc] Adding support for more Record nodes and core methods](https://github.com/dart-lang/sdk/commit/f504ad2a20c838535e95947efccf1921c7935dd6)
- [[analyzer] add UNNECESSARY_NAN_COMPARISON hint](https://github.com/dart-lang/sdk/commit/254da6749515d03abb7b7e37f342b161e9c6fdac)
- [[dart2wasm] Implement function equality](https://github.com/dart-lang/sdk/commit/ef23a1d81c085b3b1c1728333216c35290ec90f8)
- [[vm] Replace Double_hashCode native method with graph intrinsic implementation](https://github.com/dart-lang/sdk/commit/a83cfa0990063524851e0a27863d425ea8c26b02)
- [[sdk] Add performance warnings to RegExp class](https://github.com/dart-lang/sdk/commit/942a7ff6d704302c59e55251a5062cfcfa2fbb3e)
- [[vm] Raise the limit on the number of classes](https://github.com/dart-lang/sdk/commit/9182d5e5359988703a2b8a88c238f47a5295e18c)
- [[analyzer] Update SwitchExpression to th new state of the specification](https://github.com/dart-lang/sdk/commit/84c452a8263b93a0fe4a2791c174079f667c621f)
- [[dart2js] Add mmap-based read to dart2js for linux systems](https://github.com/dart-lang/sdk/commit/bdb782ba8fea7f7fd140ab0e57c598c354b3a550)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Specification and implementation work continues
for [records][] and [patterns][].

In terms of the specifications,
the [2.17 release][] of the patterns specification
was released this week with the following changes:

- Logical pattern syntax was changed to use `||` and `&&`
  instead of just `|` and `&` to avoid ambiguity around `as` expressions
- The precedence of a constant expression on right-hand side of a relational
  pattern was changed from `relationalExpression` to `bitwiseOrExpression`
- A context type is now used when type checking
  map pattern key constant expressions
- If-case elements are now specified
- Some irrelevant specifications were removed

While not new this week,
[unnamed libraries][] have been implemented in the SDK
and are set to be supported in Dart 2.19.
Unnamed libraries allow users to
document a library and associate metadata 
with a library without needing to decide on a library name.

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[records]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[patterns]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md
[2.17 release]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md#217
[unnamed libraries]:https://github.com/dart-lang/language/blob/master/accepted/future-releases/unnamed-libraries/feature-specification.md

## Package of the week

The package of the week is [**package:meta**](https://pub.dev/packages/meta)!

`package:meta` is a package built by the Dart team
providing a set of annotations to better express developer intentions 
that can't otherwise be deduced by statically analyzing source code.

Tools such as [Dart's analyzer][]
can use the information provided by the tools 
to provide feedback if your code violates intentions
signaled by these intentions.

One popular example is the `@required` annotation
used to signal a named parameter was required
before the introduction of the `required` keyword.
Another is `@immutable`, which lets the analyzer warn
you if a class with this annotation is not immutable.
To learn more about many of the useful annotations provided,
visit the [API documentation][meta-docs] of `package:meta` on pub.dev.

These annotations can be used to improve code quality
and avoid potential bugs,
helping not only you as a developer 
but also the users of your libraries.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[Dart's analyzer]: https://dart.dev/tools/dart-analyze
[meta-docs]: https://pub.dev/documentation/meta/latest/meta/meta-library.html

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
    <blockquote cite="https://twitter.com/decadentsavant/status/1594861097785462789">
        <p>I'm simply happy to see more Dart lines of code in the world</p>
    </blockquote>
    <figcaption>—@decadentsavant on <cite><a href="https://twitter.com/decadentsavant/status/1594861097785462789">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/MaxProgramming1/status/1593950739562381317">
        <p>@dart_lang is the perfect combination of Python, JavaScript, C# and Java! 
           It's so cool to work with honestly! I am loving it so far!</p>
    </blockquote>
    <figcaption>—@MaxProgramming1 on <cite><a href="https://twitter.com/MaxProgramming1/status/1593950739562381317">Twitter</a></cite></figcaption>
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
