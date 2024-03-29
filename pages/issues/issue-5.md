---
template: layouts/issue

data:
    date: 2022-06-06
    title: This Week in Dart - Issue 5
    description: The fifth issue of This Week in Dart!
    weight: 5
---

Hello fellow Dartisans!
Welcome to the fifth issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This week saw the release of Dart 2.17.3,
a patch release which fixed the following issues:

* A Dart VM compiler crash (flutter issue [#100375](https://github.com/flutter/flutter/issues/100375))
* No code completion when writing method overrides (SDK issue [#49027](https://github.com/dart-lang/sdk/issues/49027))
* The `dart pub login` command failing to write credentials (pub issue [#3424](https://github.com/dart-lang/pub/issues/3424))
* Failed constant analysis of enhanced enums (SDK issue [#49097](https://github.com/dart-lang/sdk/issues/49097))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).


## Community updates

### Discussions

* [Very Good Livestream: Dart Frog Demo](https://www.youtube.com/watch?v=N7l0b09c6DA)
* [Introducing Jaspr - A complete web-framework written in Dart](https://www.reddit.com/r/dartlang/comments/v37pwt/introducing_jaspr_a_complete_webframework_written/)
* [Create videos in Dart with Cutting Room](https://www.youtube.com/watch?v=uPrmkx29X3Y)
* [.dart and .dartServer is stored in home folder on macOS](https://github.com/dart-lang/sdk/issues/49166)
* [sameRuntimeType() function](https://github.com/dart-lang/sdk/issues/49154)

### Learning materials

* [Type Promotion | Decoding Flutter](https://www.youtube.com/watch?v=2Cl0C-9dK48)
* [Writing code as a mathematician](https://dartpad.dev/workshops.html?webserver=https://raw.githubusercontent.com/olexale/mathematician_workshop/main/#Step1)
* [Dart Essentials](https://www.cloudskillsboost.google/quests/190)
* [Dart-lang | Features you didn’t know exists](https://dev.to/krtirtho/dart-lang-features-you-didnt-know-exists-3j2b)
* [Byte sized tip: Dart and GraphQL (Flutter and GraphQL)](https://dev.to/iamchathu/byte-size-tip-dart-and-graphql-flutter-and-graphql-35d8)
* [Total Dart Language and Flutter app development Series](https://github.com/AvinandanBose/Dart_and_Flutter-app_Development_Full_Course)
* [Write BETTER code with Dart 2.17 (Included in Flutter 3)](https://www.youtube.com/watch?v=mGOxuLV2EwI)
* [How to Create DartPad Examples from GitHub Gists](https://codewithandrea.com/tips/create-dartpad-from-github-gist/)
* [Master Backend with Dart Learn inside VS Code](https://www.sideguide.dev/courses/dart-backend)

### Project releases

* [package:structured_async was released](https://pub.dev/packages/structured_async)<br>
  Structured asynchronous programming in Dart.
* [package:normal_distribution was released](https://pub.dev/packages/normal_distribution)<br>
  A minimal Dart module for working with normal distributions.
* [package:creator_core was released](https://pub.dev/packages/creator_core)<br>
  A state management library that enables
  concise, fluid, readable and testable business logic code.
* [package:jaspr was released](https://pub.dev/packages/jaspr)<br>
  Experimental web framework that feels like Flutter
  but supports server-side rendering.
* [package:domino_html was released](https://pub.dev/packages/domino_html)<br>
  Helper methods to build HTML elements with proper attributes
  using `package:domino`.

### Project updates

* [Dart Code (for VS Code) v3.42.0 was released](https://dartcode.org/releases/#v3420-2022-06-01)
* [package:ffigen v6.0.0 was released](https://pub.dev/packages/ffigen/changelog#600)
* [package:googleapis v9.0.0 was released](https://pub.dev/packages/googleapis/changelog#900)
* [package:talker v1.0.0 was released](https://pub.dev/packages/talker/changelog#100)
* [package:solana v0.25.0 was released](https://pub.dev/packages/solana/changelog#0250)
* [package:dartbag v0.4.0 was released](https://pub.dev/packages/dartbag/changelog#040)
* [package:spider v3.0.0 was released](https://pub.dev/packages/spider/changelog#300)


## Dart SDK updates

31 unique authors have contributed
[92 commits](https://github.com/dart-lang/sdk/compare/58ae85642293fce2e609883aeaf0688baa961966...633822fe73804f6980a18ed87056876f78c9f4b6)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [[cfe/ffi] Only keep Finalizables alive after their declaration](https://github.com/dart-lang/sdk/commit/a801368f80f85553682816c67c9e7dc3ea90337d)
* [[CFE] Speedup dill serialization after slowdown in 548bff1](https://github.com/dart-lang/sdk/commit/b99901c433fcf67b5617543edef25e18d915735d)
* [[vm, gc] Don't double initialize typed data in compressed pointers mode](https://github.com/dart-lang/sdk/commit/b6fd6e05933a063e8e7b6f331dd53dc551bcb9ff)
* [[release] Add 2.17.3 release notes](https://github.com/dart-lang/sdk/commit/11d63e3fa0bff0b57ead9f2ca0a39f70a9962bbb)
* [[vm] Represent the slow object copy from_to table with a heap array](https://github.com/dart-lang/sdk/commit/c588224163a371e5647756262c1c9d2fdf54c622)
* [[ Service / AOT ] Include line numbers for Functions in AOT snapshots](https://github.com/dart-lang/sdk/commit/4e688b1a59d879f20baa877fb06a90f006791d0e)
* [[vm] New async/async* implementation in JIT mode](https://github.com/dart-lang/sdk/commit/af4da780be986e9aad22ab18395f1548ac1d1937)
* [Make path argument optional for Uri.http(s)](https://github.com/dart-lang/sdk/commit/75ed6c01fb74b3fd291dc735b75095a8bff41e02)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Work and discussion around the potential
of adding augmentation libraries to Dart continues.

Augmentation libraries allow splitting a Dart library into files. 
Unlike part files, each augmentation has its own imports and top-level scope. 
Augmentations can add new top-level declarations, 
inject new members into classes, 
and wrap functions and variables in additional code.

To read more about augmentation libraries and their underlying motivations,
including class size, generated code, and macros,
see its [feature specification][augments].

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

[augments]: https://github.com/dart-lang/language/blob/master/working/augmentation-libraries/feature-specification.md

 
## Package of the week

The package of the week is [**dcli**](https://pub.dev/packages/dcli)!

dcli provides an API and tooling for building 
cross-platform command line (CLI) applications 
and scripts using the Dart programming language.

You can learn more about dcli by reading its extensive documentation
found at [dcli.onepub.dev](https://dcli.onepub.dev/).

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

### Virtual

* [FIG | DIG][fig-dig] | 2022-06-06<br>
  Dart and Flutter interest group Q&A and general discussion.
* [Dart/Flutter Code Lab][toronto] | 2022-06-07<br>
  A one-hour code lab that is meant to motivate
  and have you practice learning Dart/Flutter with others.

Let us know about other future events on
the [events discussion board][].

[fig-dig]: https://www.meetup.com/fig-dig-minneapolis-stpaul-flutter-interest-group/events/xtkvssydcjbjb/
[toronto]: https://www.meetup.com/flutter-toronto-group/events/286019021/

## Quotes and notes

<figure class="quote">
    <blockquote cite="https://twitter.com/DomesticMouse/status/1531829079812747264">
        <p>There are multiple axes when talking about speed. 
          There is startup speed, and then there is the speed of a warm server. 
          For rapid spin up containers,
          using dart compiled to native executables give fast start. 
          For long lived servers, Dart VM gives great run time optimisations.</p>
    </blockquote>
    <figcaption>—Brett Morgan on <cite><a href="https://twitter.com/DomesticMouse/status/1531829079812747264">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/CFDevelop/status/1533773706379440128">
        <p>Type inference in #dart is very nice</p>
    </blockquote>
    <figcaption>—Christian Findlay on <cite><a href="https://twitter.com/CFDevelop/status/1533773706379440128">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/chrisfujino/status/1532877304552009728">
        <p>Even Python bots love Dart (VM internals)</p>
    </blockquote>
    <figcaption>—Christopher Fujino on <cite><a href="https://twitter.com/chrisfujino/status/1532877304552009728">Twitter</a></cite></figcaption>
</figure>

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!


## Dart jobs

The following are some jobs that will provide you the opportunity
to use or even build Dart.

If you know of any jobs which use or are related to Dart,
let us know in the [Job postings for Dart][] discussion board.

### Google

- The Dart and Flutter teams have job openings across a wide variety of roles.
  See [Flutter and Dart team job openings][] for more information.

### Paramount

- [Senior Software Engineer- Flutter Development (Remote, US)](https://careers.viacomcbs.com/job/New-York-Senior-SWE-Flutter-Development-NY-10036/882329700)

### Tonal

- [Mobile Engineer (Flutter) (NY, US)](https://jobs.lever.co/tonal/b47beb5f-ad20-4bdf-b28d-f1c3bf2273de)

### Embrace

- [Flutter Engineer (Remote, US, CA, AR)](https://boards.greenhouse.io/embrace/jobs/4144809004)

### IBM

- [Senior Software Developer - Flutter (Remote, US)](https://careers.ibm.com/job/15419705/senior-software-developer-flutter-remote)

### Very Good Ventures

- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superflow

- [Mobile Flutter Engineer (Remote, Americas)](https://careers.superformula.com/o/mobile-flutter-engineer-americas)

### Superlist

- [Senior Flutter (Desktop) Developer (Remote)](https://superlist.recruitee.com/o/senior-flutter-desktop-developer-mfd)

### Baseflow

- [Flutter Dev (Netherlands)](https://www.baseflow.com/careers/flutter-dev)
- [Flutter Dev Intern](https://www.baseflow.com/careers/flutter-dev-intern)

### Rive

- [Software Engineer - Editor (Remote)](https://rive-app.notion.site/Software-Engineer-Editor-8e242820de7f4885962e71503086d76c)
- [Flutter Runtimes Engineer (Remote)](https://rive-app.notion.site/Flutter-Runtimes-Engineer-e221136319ac4792af95e893660858d5)

### Workiva

- [Senior Frontend Software Engineer (Remote, US)](https://workiva.wd1.myworkdayjobs.com/en-US/careers/job/Senior-Frontend-Software-Engineer---Remote--Nationwide-_R4492)

### Bytedance

- [Flutter Engineer, Lark Innovations (California, US)](https://jobs.bytedance.com/en/position/7068418698784540965/detail)

### L+R

- [Mobile (Flutter) Engineer](https://docs.google.com/document/d/1v9m9Qe94a5Kh8eyLwE2RbDCUc4Jm69DTVJ5P_ainjO4)

### Deloitte

- [Cross Platform Mobile Developer (Flutter) – Solution Specialist (Remote)](https://apply.deloitte.com/careers/JobDetail/Cross-Platform-Mobile-Developer-Flutter-Solution-Specialist-Remote/93174)

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

