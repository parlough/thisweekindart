---
template: layouts/issue

data:
    date: 2022-12-05
    title: This Week in Dart - Issue 18
    description: The eighteenth issue of This Week in Dart!
    weight: 18
---

Hello fellow Dartisans!
Welcome to the eighteenth issue of _This Week in Dart!_
This issue is a little different and covers news from the past two weeks.

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

These last two weeks saw the release of Dart 2.18.5,
a patch release with the following fixes and improvements:

- Fixed an error on private variable setters in mixins on Dart web (SDK issue [#50119](https://github.com/dart-lang/sdk/issues/50119))
- Fixed the handling of type parameter nullability in factory constructors (SDK issue [#50392](https://github.com/dart-lang/sdk/issues/50392))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).

### Breaking changes

A breaking change request has also been made this week
and is open for review and feedback:

- [Fix the behavior of `Socket.address`](https://github.com/dart-lang/sdk/issues/50576)

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

### Null safety

This is your reminder to migrate your packages and apps
to [sound null safety][]
which is supported with a [language version][] of 2.12 or later.

Sound null safety can bring many benefits to your projects
and is required to maintain future compatibility
with Dart and packages as they continue to evolve.
To learn more about migrating,
see [Migrating to null safety][].

Dart 3, planned for a mid-2023 release,
will require sound null safety.
To learn more, see the
[Dart 3 null safety tracking SDK issue][].

[sound null safety]: https://dart.dev/null-safety
[language version]: https://dart.dev/guides/language/evolution#language-versioning
[Migrating to null safety]: https://dart.dev/null-safety/migration-guide
[Dart 3 null safety tracking SDK issue]: https://github.com/dart-lang/sdk/issues/49530


## Community updates

### Discussions

- [Immutable Collection Benchmarks](https://github.com/MelbourneDeveloper/benchmarks/blob/main/dart/collection_bench/README.md)
- [How exactly does Dart compare performance-wise to other languages such as go and Java?](https://www.reddit.com/r/dartlang/comments/z79ntw/how_exactly_does_dart_compare_performancewise_to/)
- [Dart in backend??](https://www.reddit.com/r/dartlang/comments/z9znyd/dart_in_backend/)
- [Dart benchmarks](https://programming-language-benchmarks.vercel.app/dart)
- [(Video) Dart Frog - Flying High with Flutter #87](https://www.youtube.com/watch?v=YnxgUJyhENc)
- [(Video) Records in Dart language 2.19 - sneak peek](https://www.youtube.com/watch?v=Tfl6P5_xE4c)

### Learning materials

- [Calling anonymous functions immediately](https://www.reddit.com/r/FlutterDev/comments/z6tdjy/calling_the_anonymous_function_immediately/)
- [6 Types of Constructors in Dart](https://betterprogramming.pub/6-types-of-constructors-in-dart-e810b6d9f354)
- [Generics In Dart - Learn Dart Programming](https://www.youtube.com/watch?v=Te6M8gVqKv4)
- [Use ?? to convert null to false | Effective Dart programming](https://www.youtube.com/watch?v=8i6tLJAkA8Y)
- [Provide a tree-sitter grammar for new GitHub Search](https://github.com/dart-lang/sdk/issues/50523)

### Project releases

- [package:pcanvas was released](https://pub.dev/packages/pcanvas)<br>
  A portable canvas that can work in many platforms,
  including Flutter, web, desktop, and in-memory images.
- [package:yet_another_json_isolate was released](https://pub.dev/packages/yet_another_json_isolate)<br>
  Dart package for simple JSON parsing using isolates.
- [package:translations_cleaner was released](https://pub.dev/packages/translations_cleaner)<br>
  Package to remove unused keys in arb files, across all translations.
- [package:google_books_api was released](https://pub.dev/packages/google_books_api)<br>
  A library to help on the search for books using the Google Books API.
- [package:mimir was released](https://pub.dev/packages/mimir)<br>
  A powerful, reactive database
  with typo-tolerant full-text search and declarative queries.
- [package:chance_generator was released](https://pub.dev/packages/chance_generator)<br>
  A Dart package lets you create random strings, integers, 
  and other things to help with repetitive tasks, 
  especially when building automated tests
  or wherever else you require anything random.
- [package:pull_request_coverage was released](https://pub.dev/packages/pull_request_coverage)<br>
  A CLI tool to verify the test coverage of a pull request only, 
  ignoring the rest of the project.

### Project updates

- [Dart Code (for VS Code) v3.54.0 was released](https://dartcode.org/releases/#v3540-2022-11-29)
- [package:alfred v1.0.0 was released](https://pub.dev/packages/alfred/changelog#100)
- [package:conduit v4.0.0 was released](https://pub.dev/packages/conduit/changelog#400)
- [package:drift v2.3.0 was released](https://pub.dev/packages/drift/changelog#230)
- [package:envied v0.3.0 was released](https://pub.dev/packages/envied/changelog#030)
- [package:freezed v2.3.0 was released](https://pub.dev/packages/freezed/changelog#230)
- [package:dart_code_metrics v5.1.0 was released](https://pub.dev/packages/dart_code_metrics/changelog#510)
- [package:intl_translation v0.18.0 was released](https://pub.dev/packages/intl_translation/changelog#0180)
- [package:build_verify v3.1.0 was released](https://pub.dev/packages/build_verify/changelog#310)
- [package:copy_with_extension_gen v5.0.0 was released](https://pub.dev/packages/copy_with_extension_gen/changelog#500)
- [package:dart_jsonwebtoken v2.6.0 was released](https://pub.dev/packages/dart_jsonwebtoken/changelog#260)

## Dart SDK updates

53 unique authors have contributed
[242 commits](https://github.com/dart-lang/sdk/compare/92908bd8e70abcd48ff2d271438fb12af55d2c11...a464fc354beb0a2fee278612ccd7855071ede058)
to the Dart SDK over the past two weeks.

The following are some handpicked, interesting changes:

- [[dart2wasm] Generic function types](https://github.com/dart-lang/sdk/commit/2518307779f5168b58b27a6c52e2bdcf73877d25)
- [[cfe] Inline set literal and collection transformations in inference visitor](https://github.com/dart-lang/sdk/commit/22c013724b2e1995a365990e5c4ae8cd5e3802d6)
- [[dev_compiler] Add record types](https://github.com/dart-lang/sdk/commit/112c93863bdd179f88ddec86421bbbabaf943d83)
- [[vm, compiler] Misc RISC-V codegen tweaks](https://github.com/dart-lang/sdk/commit/4acfca65df0e5f7d3b15b507cd9a433074a8c1c9)
- [[analyzer] Add byteStore option for build_resolvers client](https://github.com/dart-lang/sdk/commit/38ac2618846e5e272b64800b84e411a25e71c375)
- [[cfe] Add parser support for switch expressions](https://github.com/dart-lang/sdk/commit/fe087f24d13bcee0d6d6298273e5ba1b5d419022)
- [[analyzer] LSP 'get implementations': get lineInfo directly](https://github.com/dart-lang/sdk/commit/56c416430e1cc53b56f386ef3338c7d275564db9)
- [[vm/compare] Speed up internal one/two-byte strings comparisons](https://github.com/dart-lang/sdk/commit/36e8d9ab6fbfbc148a41fd9baa75b7ab8dd4aa9b)
- [[dartdev] contribute a `dart bug` command](https://github.com/dart-lang/sdk/commit/1dd71b412f585bbe0353bebaa44f65d6d938cd1e)
- [[analyzer] Only search the same files for the same thing once](https://github.com/dart-lang/sdk/commit/e70befdcbdae3c794c1a0c9ad0eb63242405ce52)
- [[cfe] Initial support for view methods](https://github.com/dart-lang/sdk/commit/5994c04ef49faa349f16f2200c359463be0dae5c)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Specification, implementation, and tooling work has been continuing
for [records][] and [patterns][].

In terms of the specifications,
the [2.18][] and [2.19][] releases of the patterns specification
were released over these pasts two weeks with the following
additions and changes:

- Exhaustiveness checking of switch elements
- No more ambiguity around `=>` in switch expression guards
- Error if map patterns have duplicate keys
- Allow symbol literals in patterns
- Support for negative number literals
- Allow map patterns in pattern assignments in expression statements
- Allow symbol literals in patterns

Extracted from a larger type modifier proposal,
a proposal for `base`, `interface`, and `final` type modifiers
was also introduced.
These can be placed on classes and mixins to allow an author
to control whether the type allows being
implemented, extended, both, or neither.
Read the [feature specification][type-modifier-feature]
for more information on their functionality and motivation.

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[records]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[patterns]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md
[2.18]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md#218
[2.19]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/0546-patterns/feature-specification.md#219
[type-modifier-feature]: https://github.com/dart-lang/language/blob/master/working/base-interface-final/feature-specification.md

## Package of the week

The package of the week is [**package:puppeteer**](https://pub.dev/packages/puppeteer)!

`package:puppeteer` is a port of the [Puppeteer Node.js library][]
to Dart which enables you to automate a Chrome or Chromium browser
over the [DevTools Protocol][].

Many of things you can do in the browser manually
can be done using Puppeteer through Dart code.
Some common tasks that Puppeteer enables are:

- Generate screenshots and PDFs of pages
- Crawl a single-page application
  or generate pre-rendered content
- Automate form submission, UI testing, keyboard input, etc.
- Run your tests directly in the latest version of Chrome
  using the latest JavaScript and browser features.

Puppeteer enables extensive control and makes it easy,
even automatically installing the Chromium binaries for you.
It also allows you to run the browser in headless or "headful" mode,
depending on your use case.
If you need anything from the browser,
look no further than `package:puppeteer`.

To learn more about Puppeteer for Dart,
visit its [pub page][puppeteer-pub] where it has examples
or its generated [API docs][puppeteer-docs].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[Puppeteer Node.js library]: https://pptr.dev/
[DevTools Protocol]: https://chromedevtools.github.io/devtools-protocol/
[puppeteer-pub]: https://pub.dev/packages/puppeteer
[puppeteer-docs]: https://pub.dev/documentation/puppeteer

## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about future events on
the [events discussion board][]
to include here!

## Quotes and notes

Share quotes and comments you see or hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/Mullr33/status/1596491331375099906">
        <p>@dart_lang
           from top to bottom, front to back, and side to side</p>
    </blockquote>
    <figcaption>—@Banjoe__ on <cite><a href="https://twitter.com/Mullr33/status/1596491331375099906">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://www.reddit.com/r/dartlang/comments/z48z9g/comment/ixs6fwp">
        <p>I hope they start making a push for server side in mind. 
           I went from Java to Dart back to Java
           and man Dart such a beautiful language (except `dynamic`)</p>
    </blockquote>
    <figcaption>—@GundamLlama on <cite><a href="https://www.reddit.com/r/dartlang/comments/z48z9g/comment/ixs6fwp">r/dartlang</a></cite></figcaption>
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
