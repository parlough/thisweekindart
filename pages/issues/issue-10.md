---
template: layouts/issue

data:
    date: 2022-10-03
    title: This Week in Dart - Issue 10
    description: The tenth issue of This Week in Dart!
    weight: 10
---

Hello fellow Dartisans!
Welcome to the tenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This week saw the release of Dart 2.18.2,
a patch release with the following fixes and improvements:

* Fixed backslash handling in `Uri.parse` (SDK commit [e4ae0cf](https://github.com/dart-lang/sdk/commit/e4ae0cf2ce0755b85e9bffdfa50f5042e4edcd99))
* Fixed a compiler crash due to super parameter type inference (SDK issue [#49357](https://github.com/dart-lang/sdk/issues/49357))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).


## Community updates

### Discussions

- [Announcing an official EdgeDB client for Dart](https://www.edgedb.com/blog/edgedb-dart)
- [Tim Sneath on investment and support of Dart and Flutter](https://news.ycombinator.com/item?id=33028259)
- [Flutter Community Hacktoberfest](https://invertase.io/community/hacktoberfest)
- [Flutter Community Q&A with @MatanLurey and @kevmoo on Dart](https://www.youtube.com/watch?v=Y361N1jCu50)
- [Does dart have a wait/notify system as Java does?](https://www.reddit.com/r/dartlang/comments/xpkb4w/does_dart_have_a_waitnotify_system_as_java_does/)

### Learning materials

- [Dart Package Tutorial – Getting Started](https://www.raywenderlich.com/34692047-dart-package-tutorial-getting-started)
- [Dart Immutable Collections](https://www.christianfindlay.com/blog/dart-immutable-collections)
- [Serverpod end-to-end sample with detailed inline comments](https://github.com/serverpod/pixorama)
- [Dart Programming - List](https://www.geeksforgeeks.org/dart-programming-list/)

### Project releases

- [ubuntu_session was released](https://pub.dev/packages/ubuntu_session)<br>
  Native Dart client library to access the GNOME Session Manager
- [package:swagger_parser was released](https://pub.dev/packages/swagger_parser)<br>
  Generate REST clients and data classes from swagger json files,
  optionally using [package:freezed][].
- [package:print_remover was released](https://pub.dev/packages/print_remover)<br>
  A tool to remove all `print` statements from your project.
- [package:mc_rcon_dart was released](https://pub.dev/packages/mc_rcon_dart/changelog)<br>
  A library for interacting with a Minecraft server using the RCON protocol.

[package:freezed]: https://pub.dev/packages/freezed

### Project updates

* [package:kt_dart v1.0.0 was released](https://pub.dev/packages/kt_dart/changelog#100)
* [package:recase v4.1.0 was released](https://pub.dev/packages/recase/changelog#410)
* [package:riverpod v2.0.0 was released](https://pub.dev/packages/riverpod/changelog#200)
* [package:chess v0.8.0 was released](https://pub.dev/packages/chess/changelog#080)
* [package:stream_chat v5.0.0 was released](https://pub.dev/packages/stream_chat/changelog#500)
* [package:sprintf v7.0.0 was released](https://pub.dev/packages/sprintf/changelog)
* [package:minerva v0.2.3 was released](https://pub.dev/packages/minerva/changelog#023)
* [package:daco v0.2.4 was released](https://pub.dev/packages/daco/changelog#024)
* [package:twitter_api_v2 v4.1.0 was released](https://pub.dev/packages/twitter_api_v2/changelog#v410)


## Dart SDK updates

34 unique authors have contributed
[140 commits](https://github.com/dart-lang/sdk/compare/cfddeee68e0cf7451a2eee1a9fbbff8a8d9c0b92...06847c34fba4c439fa48b7d52346a5d865588c6f)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [[cfe] Add initial implementation of type inference for records](https://github.com/dart-lang/sdk/commit/354f144c08b9af5a105393305faa809d828dbfe4)
* [[vm/ffi] Support DynamicLibrary.process() on Windows](https://github.com/dart-lang/sdk/commit/c04673f44b61c104e1818ea18f93788f4615aa7b)
* [Patterns: initial parser support](https://github.com/dart-lang/sdk/commit/6945a72009a573062e4815ab3d984a17124d553e)
* [[dart2wasm] Partially lazy constants](https://github.com/dart-lang/sdk/commit/e08c94a65147aaa3ec8c4e09fd1935f20599eec2)
* [[vm] Support record types and record constants in IL serialization](https://github.com/dart-lang/sdk/commit/b860d9ee369b0b1381975ddd104b9079f73bd984)
* [[dart2js] Avoid eager initialization with a large set](https://github.com/dart-lang/sdk/commit/a8ab1853a9de4d5aa07fb75212f60af8a6389a64)
* [Add CLI tool for analyzing Dart VM heapsnapshots](https://github.com/dart-lang/sdk/commit/ed5ad5c08739d01baa1baf79068ebba01981f9ea)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

As patterns and records have begun implementation in the SDK,
there has been a lot of work around cleanup, remaining questions,
and fixes to the related proposals and specifications.

This past week saw version 1.13
of the [Records feature specification][] released.
The static constant `Record.empty` was removed in favor of 
the `()` expression which refers to the constant empty record with no fields.

To learn more about records, see the [Records feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Records tag][].

To learn more about patterns, see the [Patterns feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Patterns tag][].

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[Records feature specification]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[Records tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Arecords
[Patterns feature specification]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md
[Patterns tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Apatterns


## Package of the week

The package of the week is 
[**custom_list**](https://pub.dev/packages/custom_lint)!

`package:custom_lint` allows package authors and developers
to easily write custom lint rules.
Lint rules are a powerful way to improve the maintainability of a project
through static analysis.

The package goes beyond the capabilities afforded
by the traditional analyzer plugin support,
but including a lot of custom functionality and utilities
necessary for implementing powerful and configurable lints.

Dart already has many [diagnostics][] provided by its analysis server
and many more which can be enabled through [linter rules][],
but these may lack rules that your project needs
or for best practices your project or company prefers.
This package allows you to implement those according to your needs
or for third-party packages which the standard lint rules do not account for.

You can learn more about using `package:custom_lint` and implementing
your first custom rules in its [Usage][custom-lint-usage] section,
its [announcement post][custom-lint-announcement],
or an extensive video tutorial about 
[Creating custom lint rules for Dart and Flutter projects][].

Thanks to [@Luckey-Elijah](https://github.com/Luckey-Elijah)
for the suggestion!

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[diagnostics]: https://dart.dev/tools/diagnostic-messages
[linter rules]: https://dart.dev/tools/linter-rules
[custom-lint-usage]: https://pub.dev/packages/custom_lint#usage
[custom-lint-announcement]: https://invertase.io/blog/announcing-dart-custom-lint
[Creating custom lint rules for Dart and Flutter projects]: https://www.youtube.com/watch?v=Okg1Os-gtbo


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
    <blockquote cite="https://twitter.com/oravecz/status/1576557672073396226">
        <p>Not useless. Dart as a general purpose language is just being discovered. 
           Native code, instant startup speeds, light concurrency, type-safe language. 
           It’s already being used for CLI, microservice frameworks. 
           Wouldn’t be surprised to see it used more at edge or in lambdas soon.</p>
    </blockquote>
    <figcaption>—@oravecz on <cite><a href="https://twitter.com/oravecz/status/1576557672073396226">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/ibrahimshehuib4/status/1576139519690444800">
        <p>Learning other functional and OOP programming language[s] became easier with knowledge of Dart</p>
    </blockquote>   
    <figcaption>—@ibrahimshehuib4 on <cite><a href="https://twitter.com/ibrahimshehuib4/status/1576139519690444800">Twitter</a></cite></figcaption>
</figure>


## Dart jobs

The following are some jobs that will provide you the opportunity
to use or even build Dart.

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board.

### Google

- The Dart and Flutter teams have job openings across a wide variety of roles.
  See [Flutter and Dart team job openings][] for more information.

### Embrace

- [Flutter Engineer (US, Canada, Argentina)](https://boards.greenhouse.io/embrace/jobs/4144809004)

### Superlist

- [Senior Flutter Developer (Remote, Germany)](https://superlist.recruitee.com/o/senior-flutter-developer-mfd)

### Very Good Ventures

- [Mid-Level Flutter Engineer (Remote, Spain)](https://apply.workable.com/very-good-ventures/j/0A59EA0F0A/)
- [Mid-Level Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/887770EDD0/)
- [Senior Flutter Engineer (Remote, Poland)](https://apply.workable.com/very-good-ventures/j/EC7948F4F3/)
- [Senior Flutter Engineer (Remote, Spain)](https://apply.workable.com/very-good-ventures/j/1F6FE77E80/)
- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superformula

- [Mobile Flutter Engineer (Remote, Americas)](https://careers.superformula.com/o/mobile-flutter-engineer-americas)

### Invertase

- [Technical Lead - Zapp! (Remote, Europe)](https://invertase.io/careers/zapp-technical-lead)

### Deloitte

- [Mobile Developer - Flutter (US)](https://apply.deloitte.com/careers/JobDetail/Mobile-Developer-Flutter-ConvergeHEALTH-Deloitte-Consulting-LLP/117233)
- [Lead Flutter UI Engineer (US)](https://apply.deloitte.com/careers/JobDetail/ConvergePROSPERITY-BankingSuite-Lead-Flutter-UI-Engineer/117032)

### Swiss Aviation Software

- [Full Stack Software Engineer in Java & Dart (Basel, CH)](https://swissas.teamtailor.com/jobs/1794803-full-stack-software-engineer-in-java-dart)

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