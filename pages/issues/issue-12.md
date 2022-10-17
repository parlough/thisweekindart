---
template: layouts/issue

data:
    date: 2022-10-17
    title: This Week in Dart - Issue 12
    description: The twelfth issue of This Week in Dart!
    weight: 12
---

Hello fellow Dartisans!
Welcome to the twelfth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

Two breaking change requests have been made this week
and are open for review and feedback:

- [Remove Observatory from the Dart VM](https://github.com/dart-lang/sdk/issues/50233)
- [Remove support for `Metrics` from `dart:developer`](https://github.com/dart-lang/sdk/issues/50231)

Head to those linked issues to learn more about the breaking changes,
the reasoning behind them, their impact, and potential mitigations. 
Feel free to leave comments or concerns.

Generally the Dart team strives to not make breaking changes, 
and to preserve compatibility of all Dart programs
across stable Dart SDK releases, 
but sometimes breaking changes are needed or justified.
To learn more about this process, 
see [Dart SDK breaking change process][].

[Dart SDK breaking change process]: https://github.com/dart-lang/sdk/blob/main/docs/process/breaking-changes.md


## Community updates

### Discussions

- [Code Golf now supports Dart](https://www.reddit.com/r/dartlang/comments/y3og7i/code_golf_now_supports_dart/)
- [OpenSearch for pub.dev](https://github.com/hacker1024/pubsearch)
- [Dawn 6.0 was released](https://github.com/Hawmex/dawn/issues/11)
- [Suggest supporting algebraic effects](https://www.reddit.com/r/dartlang/comments/xzu55m/suggest_supporting_algebraic_effects/)
- [Future.wait should support Flutter's SynchronousFuture](https://github.com/dart-lang/sdk/issues/50204)

### Learning materials

- [Clean Code: #3 Comments (Dart examples)](https://www.youtube.com/watch?v=lS8JXMeiaRw)

### Project releases

* [package:markdown_prettier was released](https://pub.dev/packages/markdown_prettier)<br>
  A Markdown prettier library written in Dart.
* [package:shelf_session was released](https://pub.dev/packages/shelf_session)<br>
  An implementation of `cookiesMiddleware` and `sessionMiddleware`
  for `package:shelf`.
* [package:axiom was released](https://pub.dev/packages/axiom)<br>
  A CLI tool that converts JSON into gorgeous, typesafe code in Dart.
* [package:github_contrib_exporter was released](https://pub.dev/packages/github_contrib_exporter)<br>
  Exports the contributor insights data seen in GitHub to CSV, 
  so it can be further processed externally.
* [package:tgtg_client was released](https://pub.dev/packages/tgtg_client)<br>
  An unofficial Dart client to access the Too Good To Go service,
  that connects customers to restaurants
  and stores that have surplus unsold food.

### Project updates

- [package:fpdart v0.3.0 was released](https://pub.dev/packages/fpdart/changelog#v030---11-october-2022)
- [package:freezed v2.2.0 was released](https://pub.dev/packages/freezed/changelog#220)
- [package:collection v1.17.0 was released](https://pub.dev/packages/freezed/changelog#220)
- [package:dart_frog v0.2.0 was released](https://pub.dev/packages/dart_frog/changelog#020)
- [package:stormberry v0.9.0 was released](https://pub.dev/packages/stormberry/changelog#090)
- [package:sass_builder v2.2.0 was released](https://pub.dev/packages/sass_builder/changelog#220)
- [package:scope v3.0.0 was released](https://pub.dev/packages/scope/changelog#300)
- [package:dart_markdown v3.1.0 was released](https://pub.dev/packages/dart_markdown/changelog#310)


## Dart SDK updates

19 unique authors have contributed
[58 commits](https://github.com/dart-lang/sdk/compare/20fff85f104a06aef7816df8d9113bcdcf9a9a55...ef24f4c91545ba2e095315d37a3d610db185618e)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[vm,corelib] Restrict Expando/WeakReference usage for records](https://github.com/dart-lang/sdk/commit/cf111fdcfb46709982f1249223a383584a19da1c)
- [[dds/dap] Optimise computing line/col for stack frames](https://github.com/dart-lang/sdk/commit/946eec83304865d39dbb5186d95a79bca1b2edec)
- [[observatory] Dramatically reduce timeline loading time](https://github.com/dart-lang/sdk/commit/caffe45c7af08b514dc01bb31dde3edd3480787d)
- [[analysis_server] Trigger reanalysis when LSP TODO settings change](https://github.com/dart-lang/sdk/commit/20af356c79e3b23bada43b1921e3b5b780de7ec8)
- [[analysis_server] Fix renaming of enum constants](https://github.com/dart-lang/sdk/commit/b5846d8aba1ff4340b79abcfb3d0ef89916ea953)
- [[analysis_server] Add LSP Type Hierarchy](https://github.com/dart-lang/sdk/commit/6f8d1e4859b4052094f2f492aa596b8f6364a412)
- [[vm] Extend string optimizations to UnmodifiableUint8List](https://github.com/dart-lang/sdk/commit/11bf5d863284028944cfed04d43f5ba2a9e45637)
- [Parser: add support for wildcard patterns](https://github.com/dart-lang/sdk/commit/5923b883dbe0bc241825e29d92d0503f7d4305c0)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Records and patterns have been seeing extensive implementation work
across all parts of the SDK over the past month,
and final touches around their language specifications
alongside fixes and improvements have been made as well.

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

The package of the week is [**ngdart**](https://pub.dev/packages/ngdart)
and the [other surrounding packages][ngdart-other]
supported by the [Angular Dart Community][].

`package:ngdart` and its surrounding packages and [website][ngdart-website]
is a community maintained fork of the original AngularDart ecosystem.

[Originally developed][ng-orig] by Google as one of the primary uses of Dart, 
AngularDart has powered sophisticated, 
mission-critical apps that serve millions of users.

AngularDart is built on the Dart Web platform. 
By leveraging Dart's concise type system, 
sound null safety, 
and other useful development tools, 
AngularDart helps you build beautiful websites productively
with an elegant and maintainable codebase, 
without all the complicated hassle of a JavaScript library.

It's super exciting to see the community continue the ecosystem
that was core to Dart development for so long,
bringing it and its surrounding packages and documentation
into the modern era of Dart. 
Many projects were built with AngularDart
and this works gives them the opportunity to
stay within the ecosystem they learned to love over many years.

While it's easy to forget these days,
Dart's journey began in the web space,
and it's still a strong contender.
This community-maintained fork
of AngularDart showcases that well!

To learn more about the community maintained AngularDart,
visit its [GitHub organization][Angular Dart Community], 
its [list of packages][ngdart-other],
and its [website][ngdart-website].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[ngdart-other]: https://pub.dev/publishers/angulardart.xyz/packages
[Angular Dart Community]: https://github.com/angulardart-community
[ngdart-website]: https://angulardart.xyz/
[ng-orig]: https://news.dartlang.org/2013/11/angular-announces-angulardart.html


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about other future events on
the [events discussion board][].

### United States and Remote

* [Firebase Summit 2022][firebase-2022] | New York City, NY | 2022-10-18<br>
  Join us on Tuesday, October 18 for the seventh annual Firebase Summit! 
  We will be hosting a hybrid event
  consisting of both an in-person and virtual experience. 
  If you're able to travel, join us at Pier 57 in New York City, 
  which will include a keynote full of product updates, expert-led classes, 
  interactive demos, networking opportunities, 
  and exciting conversations with the community. 
  Or, tune in online from wherever you are!

* [Flutter Silicon Valley Meetup #4][flutter-silicon-4] | Mountain View, CA | 2022-10-26<br>
  RSVP needed to attend. 
  Flutter Developer Community for all developers
  based in Bay Area/Silicon Valley, California,
  and Flutter Enthusiasts from the world over. 
  Being so close to Google and Flutter's home base, 
  our goal is to bring Flutter & Dart Developers together
  to meet, learn, grow and help each other.

[firebase-2022]: https://firebase.google.com/summit
[flutter-silicon-4]: https://www.meetup.com/flutter-silicon-valley/events/288336669/

## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/papa_gianfranco/status/1579558759663570944">
        <p>11 years ago, #Dart was unveiled at the GOTO Conference 
           and since then has released numerous versions until today: 2.18🚀<br>
           Its improvements are remarkable, and together with #Flutter they make,
           in my opinion, the best duo in terms of speed, safety, and performance.<br>
           Happy B-day🥳</p>
    </blockquote>
    <figcaption>—@papa_gianfranco (Gianfranco Papa) on <cite><a href="https://twitter.com/papa_gianfranco/status/1579558759663570944">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/passsy/status/1581739202688925697">
        <p>Lesson learned: Don't manipulate files in your ~/.pub-cache
        </p>
    </blockquote>
    <figcaption>—@passsy (Pascal Welsch) on <cite><a href="https://twitter.com/passsy/status/1581739202688925697">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/CFDevelop/status/1579415814482296832">
        <p>#dartlang is very nice
        </p>
    </blockquote>
    <figcaption>—@CFDevelop (Christian Findlay) on <cite><a href="https://twitter.com/CFDevelop/status/1579415814482296832">Twitter</a></cite></figcaption>
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