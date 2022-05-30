---
template: layouts/issue

data:
    date: 2022-05-30
    title: This Week in Dart - Issue 3
    description: The fourth issue of This Week in Dart!
    weight: 3
---

Hello fellow Dartisans!
Welcome to the fourth issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

It was brought to our attention by a Twitter post from [@csells][]
that [Compiler Explorer][] by Matt Godbolt now supports 
compiling Dart code and showing the underlying assembly.

The support was initially added by [Michael Debertol][]
in commit [3f695c9][] and supports some of the most recent
releases of Dart, including those with and without null safety.

While not everyone needs to view the underlying assembly of their Dart code,
and you could already do so locally,
this addition greatly lowers the barrier to further exploration.
Seeing how your code is compiled
can help improve your understanding of the code
and the Dart compiler itself,
enabling you to potentially 
identify new functional or performance issues with either.

[@csells]: https://twitter.com/csells/status/1528585111209246720
[Compiler Explorer]: https://godbolt.org/
[Michael Debertol]: https://github.com/miDeb
[3f695c9]: https://github.com/compiler-explorer/compiler-explorer/commit/3f695c9cc10d69544440776a1dbb69866434f18d

## Community updates

### Discussions

* [Flutter Layout spends 50% of its time in "File backed page in"](https://github.com/dart-lang/sdk/issues/49119)
* [runtimeType is too expensive](https://github.com/dart-lang/sdk/issues/49115)
* [Process hangs if ReceivePort.close not called](https://github.com/dart-lang/sdk/issues/49083)

### Learning materials

* [All About Using Regular Expressions (RegExp) in Dart/Flutter](https://blog.0xba1.xyz/0522/dart-flutter-regexp/)
* [Basic and advanced networking in Dart and Flutter](https://medium.com/tide-engineering-team/basic-and-advanced-networking-in-dart-and-flutter-the-tide-way-part-0-introduction-33ac040a4a1c)
* [A simple Service Locator for Dart and Flutter projects](https://www.youtube.com/watch?v=O1CqcT8KtGA)
* [Learn Dart Programming (by Codemy)](https://www.youtube.com/playlist?list=PLCC34OHNcOto7WU2QzVn3hnpSOYEdflVf)
* [Higher-Order Functions & Recursion in Dart [Functional Programming — Part 5]](https://medium.com/flutter-community/higher-order-functions-recursion-in-dart-functional-programming-part-5-4237bc114005)
* [Write BETTER code with Dart 2.17 (Included in Flutter 3)](https://www.youtube.com/watch?v=mGOxuLV2EwI)
* [Dart Programming – List](https://www.geeksforgeeks.org/dart-programming-list/)
* [Dart Tutorials (by Flutter Teacher)](https://www.youtube.com/playlist?list=PLeKQz1VjpjFqqXLvQ8rTnYxZcUqEGA0dm)

### Project releases

* [package:dartbag was released](https://pub.dev/packages/dartbag)<br>
  A grab-bag of miscellaneous, lightweight utility code for Dart.
* [package:dart_frog was released](https://pub.dev/packages/dart_frog)<br>
  A fast, minimalistic backend framework for Dart.
* [package:cities was released](https://pub.dev/packages/cities)<br>
  A dataset containing over 2 million real cities 
  that can be used by benchmarks or demos.
* [package:cached was released](https://pub.dev/packages/cached)<br>
  Generators for cache mechanisms for Dart classes.
* [package:dfp was released](https://pub.dev/packages/dfp)<br>
  A library for typed functional programming in Dart, inspired by Rust.

### Project updates

* [package:ffi v2.0.0 was released](https://pub.dev/packages/ffi/changelog#200)
* [package:stash v4.1.0 was released](https://pub.dev/packages/stash/changelog#410)
* [package:toml v0.13.0 was released](https://pub.dev/packages/toml/changelog#0130)
* [package:jugger_generator v2.3.0 was released](https://pub.dev/packages/jugger_generator/changelog#230)
* [package:win32 v2.7.0 was released](https://pub.dev/packages/win32/changelog#270)
* [package:screwdriver v3.0.0 was released](https://pub.dev/packages/screwdriver/changelog#300)
* [package:uploadcare_client v6.0.0 was released](https://pub.dev/packages/uploadcare_client/changelog#600---thu-may-26-2022)
* [package:equations v4.0.0 was released](https://pub.dev/packages/equations/changelog#400)


## Dart SDK updates

24 unique authors have contributed
[79 commits](https://github.com/dart-lang/sdk/compare/554af2272c2fc662906a2ee1bc412b66da3fece4...58ae85642293fce2e609883aeaf0688baa961966)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [Turn on the experimental feature inference-update-1](https://github.com/dart-lang/sdk/commit/0a92b0c3aa2e32924a04c7a12a544f98b611fea4)
* [[analysis_server] Handle navigation for "part of"s using URIs](https://github.com/dart-lang/sdk/commit/2591ed885b279f67c45490c8de253435a01cac66)
* [[vm, compiler] Implement Smi_bitLength intrinsic on RV](https://github.com/dart-lang/sdk/commit/2bddaaacc752e288773ecd106d7ebeb10d277af6)
* [[vm, compiler] Make more use of the zero register on ARM64 and RV](https://github.com/dart-lang/sdk/commit/3f0461a17c9972782a2b1f78373e4ce982182805)
* [Issue 49097. Resolve constants in enhanced enum constructors/methods](https://github.com/dart-lang/sdk/commit/5dfbe88332bc413e0a03ae0c521d8b8b93521c8d)
* [[vm, compiler] Prune dictionaries to only contain elements needed at runtime](https://github.com/dart-lang/sdk/commit/6de162e014ebbfeb098620456de96bb729ac269d)
* [Suggest static fields/getters](https://github.com/dart-lang/sdk/commit/b253c4a004187f0c33082d17618e509956d048fb)
* [Add new diagnostic documentation](https://github.com/dart-lang/sdk/commit/264f5255db3e7d2573858641bb8d31755b49172c)
* [Issue 48004. Report when null-aware operator is used on type](https://github.com/dart-lang/sdk/commit/58ae85642293fce2e609883aeaf0688baa961966)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Work and discussion around
the potential of
adding [patterns][] and [records][]
to Dart continues.

The most recent development has been a change to the pattern proposal's
named field shorthand syntax to infer the field name 
instead of inferring the variable subpattern.
See the [Change named field shorthand syntax][2260] pull request
on GitHub to review the proposed changes and provide feedback.

To learn more about and contribute to discussion
of current and future changes to the Dart language,
visit the [Dart language repository][].

[patterns]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md
[records]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/records-feature-specification.md
[2260]: https://github.com/dart-lang/language/pull/2260
 
## Package of the week

The package of the week is [**dart_frog**](https://pub.dev/packages/dart_frog)!

`package:dart_frog` is a fast, minimalistic backend framework for Dart
developed by Very Good Ventures. 

According to their documentation:

Dart Frog is built on top of shelf and mason 
and is inspired by many tools including remix.run, next.js, and express.js.

The goal of Dart Frog is to help developers effectively build backends in Dart. 
Currently, Dart Frog is focused on optimizing the process of building backends 
which aggregate, compose, and normalize data from multiple sources.

Dart Frog provides a simple core with a small API surface area 
in order to reduce the learning curve and ramp-up time for developers. 
In addition, Dart Frog is intended to help Flutter/Dart developers
maximize their productivity by having a unified tech stack
that enables sharing tooling, models, and more!

---

The release of dart_frog and its corresponding packages
is super exciting and marks the continued progress
as the Dart ecosystem and community
are making to again expand Dart beyond Flutter,
particularly in the server space.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about other future events on
the [events discussion board][].


## Quotes and notes

<figure class="quote">
    <blockquote cite="https://twitter.com/Indiequest1/status/1529880142343962627">
        <p>My fav of all time is <a href="https://dart.dev/tools/dart-fix">[dart fix]</a>
          @dart_lang which keeps the upgrade paths
          in that ecosystem incredibly smooth.
          As new language features and best practices roll out
          in new releases I run one command and
          it will rewrite my code for me to keep me on the happy path.</p>
    </blockquote>
    <figcaption>—Indiequest on <cite><a href="https://twitter.com/Indiequest1/status/1529880142343962627">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/MatthewRideout/status/1530640183842021378">
        <p>I am a proud @dart_lang fanboi. I just love working with it.</p>
    </blockquote>
    <figcaption>—Matthew Rideout on <cite><a href="https://twitter.com/MatthewRideout/status/1530640183842021378">Twitter</a></cite></figcaption>
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

