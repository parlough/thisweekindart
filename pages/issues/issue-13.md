---
template: layouts/issue

data:
    date: 2022-10-24
    title: This Week in Dart - Issue 13
    description: The thirteenth issue of This Week in Dart!
    weight: 13
---

Hello fellow Dartisans!
Welcome to the thirteenth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This week saw the release of Dart 2.18.3,
a patch release with the following fixes and improvements:

* Fixed a regression in code coverage computation (SDK issue [#49887](https://github.com/dart-lang/sdk/issues/49887))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).

The Dart team has also published a notification
that [`package:analysis_server_client`][] may be discontinued.
They are looking to hear about current uses of the package
and other feedback on the discontinuation.
To learn more and leave feedback,
see [SDK Issue #50262](https://github.com/dart-lang/sdk/issues/50262).

[`package:analysis_server_client`]: https://pub.dev/packages/analysis_server_client

## Community updates

### Discussions

- [Intent to implement: dart:crypto](https://github.com/dart-lang/sdk/issues/50290)
- [UX improvements for CFE error messages](https://github.com/dart-lang/sdk/issues/50281)
- [Flutter Dependency Injection: ioc_container V1](https://cfdevelop.medium.com/flutter-dependency-injection-ioc-container-v1-1aab53763b7c)
- [Why are global variables bad, but globally accessed Provider (from riverpod) good/ok?](https://www.reddit.com/r/dartlang/comments/yas78s/why_are_global_variables_bad_but_globally/)
- [When to you use Isolates a philosophical question](https://www.reddit.com/r/dartlang/comments/y9szse/when_to_you_use_isolates_a_philosophical_question/)
- [What advantages will Dart get if there is no dynamic?](https://www.reddit.com/r/dartlang/comments/y9lfc0/what_advantages_will_dart_get_if_there_is_no/)
- [supabase-flutter v1 Released](https://supabase.com/blog/supabase-flutter-sdk-v1-released)

### Learning materials

- [Simple Dart Server | Flutter Serverpod](https://www.youtube.com/watch?v=1K7j5D2KWjw)
- [Dart Completer in 50 seconds](https://twitter.com/rexthecoder/status/1584287467062300672)

### Project releases

* [package:qstash_dart was released](https://pub.dev/packages/qstash_dart)<br>
  A HTTP based messaging and scheduling solution
  for serverless and edge runtimes.
* [package:fut_map was released](https://pub.dev/packages/fut_map)<br>
  Concurrent futures map. Allows setting a concurrency level 
  when mapping an iterable with futures.
* [package:universal_feed was released](https://pub.dev/packages/universal_feed)<br>
  Universal parser for RSS and Atom feeds with support for some extensions
  (dc, dcterms, media, itunes, georss, syndication, content).
* [package:mint was released](https://pub.dev/packages/mint)<br>
  Code generation framework with support
  for copyWith, copyJar, equality, and JsonSerializable (fromJson, toJson).
* [package:interactive was released](https://pub.dev/packages/interactive)<br>
  REPL (interactive shell) for Dart, 
  supporting 3rd party packages, hot reload, and full grammar.

### Project updates

- [package:postgrest v1.0.0 was released](https://pub.dev/packages/postgrest/changelog#100)
- [package:supabase v1.0.0 was released](https://pub.dev/packages/supabase/changelog#100)
- [package:js v0.6.5 was released](https://pub.dev/packages/js/changelog#065)
- [package:analysis_server_client v2.0.0 was released](https://pub.dev/packages/analysis_server_client/changelog#200)
- [package:graphs v2.2.0 was released](https://pub.dev/packages/graphs/changelog#220)
- [package:petitparser v5.1.0 was released](https://pub.dev/packages/petitparser/changelog#510)
- [package:sodium v2.0.0 was released](https://pub.dev/packages/sodium/changelog#200)
- [package twitter_api_v2 4.2.0 was released](https://pub.dev/packages/twitter_api_v2/changelog#v420)


## Dart SDK updates

30 unique authors have contributed
[103 commits](https://github.com/dart-lang/sdk/compare/ef24f4c91545ba2e095315d37a3d610db185618e...1244294c093393a90d9024e7e54a5c72b1a3c35e)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[nnbd_migration] Add "Add 'late' hint" feature](https://github.com/dart-lang/sdk/commit/c3fb57010512acdc680593186e86a32f345ec694)
- [[io] Avoid serializing unwritten bytes in async I/O](https://github.com/dart-lang/sdk/commit/d2a43581a3af72f7a26a5739274f01b22661c0b3)
- [[CLI] Fix dart run --enable-experiment](https://github.com/dart-lang/sdk/commit/39168c9ef0bfe57390180edd26ba36a07f8db509)
- [[dart2wasm] Perform some missing runtime type normalizations](https://github.com/dart-lang/sdk/commit/ea541423d06d9ded3d90f959beb4c6d24b80d4c4)
- [[sdk] DateTime copyWith extension](https://github.com/dart-lang/sdk/commit/6e4e12922a3d4d90357839847b9275a04c829ab7)
- [[dart2wasm] Implement simd types naively](https://github.com/dart-lang/sdk/commit/be1ae6a91bd7a5e1bc093c21ec37caa03eb63ab2)
- [[vm] Better implementation of hashCode function](https://github.com/dart-lang/sdk/commit/8c0df46887744e229b74bfb8c6bfc05df67f67eb)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Records and patterns have been seeing extensive implementation work
across all parts of the SDK over the past month,
and final touches around their language specifications
alongside fixes and improvements have been made as well.

There has been discussion this past week around 
type checking of List/Map patterns. 
To see or comment on the changes,
see [pull request #2569][].

To learn more about records, see the [Records feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Records tag][].

To learn more about patterns, see the [Patterns feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Patterns tag][].

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[pull request #2569]: https://github.com/dart-lang/language/pull/2569
[Records feature specification]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[Records tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Arecords
[Patterns feature specification]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md
[Patterns tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Apatterns


## Package of the week

The package of the week is [**daco**](https://pub.dev/packages/daco)!

`package:daco` is a tool for enabling better maintenance of Dart comments.
It provides support for the following:

- Formatting doc comments as Markdown
- Formatting Dart code examples in doc comments
- Analyzing Dart code examples
- An analyzer plugin which extends Dart analyzer support
  to Dart code in doc comments

This is exciting as documentation is really important
to the success of an individual package
as well as the whole package ecosystem.
No one will use or benefit from your package or code
if they don't understand it.
If you can write and maintain good documentation comments with
examples that are up-to-date and actually work,
users will find much more success using your libraries.
`package:daco` with this functionality
could potentially contribute to enabling
successful learning of your libraries.

To learn more about `package:daco` and how to use it,
see its [page on the pub.dev site][daco].
If you need help,
consider opening a [new discussion][daco-discuss] on its GitHub.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[daco]: https://pub.dev/packages/daco
[daco-discuss]: https://github.com/blaugold/daco/discussions

## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about other future events on
the [events discussion board][].

### United States

* [Flutter Silicon Valley Meetup #4][flutter-silicon-4] | Mountain View, CA | 2022-10-26<br>
  RSVP needed to attend. 
  Flutter Developer Community for all developers
  based in Bay Area/Silicon Valley, California,
  and Flutter Enthusiasts from the world over. 
  Being so close to Google and Flutter's home base, 
  our goal is to bring Flutter & Dart Developers together
  to meet, learn, grow and help each other.

[flutter-silicon-4]: https://www.meetup.com/flutter-silicon-valley/events/288336669/

### Europe

* [2 Day Flutter Track @ Droidcon London 2022][droidcon] | London, UK | 2022-10-27<br>
  Two full days of Flutter talks 
  along with a huge amount of Android specific knowledge being shared.

* [Flutter Karlsruhe - Meetup Revival][karlsruhe] | Karlsruhe, DE | 2022-10-27<br>
  Come meet each other and build a network of passionate Flutter developers
  in the area while having fun!

* [October Flutter Bucharest Meetup][bucharest-oct] | Bucharest, RO | 2022-10-25<br>
  An event covering what Flutter is, how the evolution of the framework looks so far,
  and a circle-talk to get to know each other and share ideas about
  Flutter and application development.

[droidcon]: https://www.meetup.com/flutterldn/events/289023986/
[karlsruhe]: https://www.meetup.com/karlsruhe-flutter-meetup/events/288818320/
[bucharest-oct]: https://www.meetup.com/flutter-bucharest-meetup/events/289113123/

## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/b4_eva/status/1584055064255115265">
        <p>I just learned about extension methods in dart and 
           I feel like I just unlocked another mini super power. </p>
    </blockquote>
    <figcaption>—@b4_eva on <cite><a href="https://twitter.com/b4_eva/status/1584055064255115265">Twitter</a></cite></figcaption>
</figure>

## Dart jobs

The following are some jobs that will provide you the opportunity
to use or even build Dart.

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board.

### Google

- The Dart and Flutter teams have job openings across a wide variety of roles.
  See [Flutter and Dart team job openings][] for more information.

### Reflectly

- [Flutter Developer (Remote, Europe)](https://careers.reflectly.app/d1fb9856418e47949b64b0a1dec1a283)

### Nubank

- [Mobile Software Engineer (Mexico City, Mexico)](https://boards.greenhouse.io/nubank/jobs/4623745)
- [Mobile Software Engineer (Bogotá, Colombia)](https://boards.greenhouse.io/nubank/jobs/3560848)

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

- [Technical Lead - Zapp! (Remote, Europe)](https://archive.invertase.io/careers/zapp-technical-lead)

### Deloitte

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
