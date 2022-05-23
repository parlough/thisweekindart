---
template: layouts/issue

data:
    date: 2022-05-23
    title: This Week in Dart - Issue 2
    description: The third issue of This Week in Dart!
    weight: 2
---

Hello fellow Dartisans!
Welcome to the third issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

This week saw the release of Dart 2.17.1,
a patch release which fixed the following issues:

* An analyzer plugin crash (issue [#48682](https://github.com/dart-lang/sdk/issues/48682))
* `LateInitializationError` on `late` `Finalizable` variables (issue [#49005](https://github.com/dart-lang/sdk/issues/49005))
* AOT compilation failure with `dart compile` on macOS 10.15 (issue [#49010](https://github.com/dart-lang/sdk/issues/49010))

To learn how to update your Dart version,
check out [Get the Dart SDK](https://dart.dev/get-dart)
or download the update
from the [Dart SDK archive](https://dart.dev/get-dart/archive).


## Community updates

### Official

* [Customizing `dart fix`](https://dart.dev/tools/dart-fix#customizing-dart-fix)
* [Weak references and finalizers](https://dart.dev/guides/libraries/library-tour#weak-references-and-finalizers)

### Discussions

* [Flutter Propels Dart, frameworks, language adoption and cross platform development](https://redmonk.com/jgovernor/2022/05/16/flutter-propels-dart-frameworks-language-adoption-and-cross-platform-development/)
* [How I switched to Flutter and lost 10 kilos](https://matthiasnehlsen.com/blog/2022/05/15/switched-to-flutter-lost-10-kilos/)
* [Bring your multi-platform apps to Linux desktop with Flutter 3](https://ubuntu.com/blog/bring-multi-platform-apps-to-linux-desktop-with-flutter-3)
* [Dart And Other Programming Languages](https://medium.com/@AliBehzadian/dart-and-other-programming-languages-ce3e5cbf0ed5)
* [Emerald - JSON serializer/deserializer for JIT (uses dart:mirrors)](https://www.reddit.com/r/dartlang/comments/us9o2j/emerald_json_serializerdeserializer_for_jit_uses/)
* [Add function to the Dart Embedder API to prevent GC from running](https://github.com/dart-lang/sdk/issues/49034)
* [Dart2js uses JavaScript's RegExp implementation instead of Dart's own](https://github.com/dart-lang/sdk/issues/49013)

### Learning materials

* [What's new in Dart 2.17](https://www.youtube.com/watch?v=UGRAQYu6qcU)
* [A simple Service Locator for Dart and Flutter projects](https://www.youtube.com/watch?v=O1CqcT8KtGA)
* [Learn Dart Programming (by Codemy)](https://www.youtube.com/playlist?list=PLCC34OHNcOto7WU2QzVn3hnpSOYEdflVf)

### Project releases

* [package:lindenmayer_systems was released](https://pub.dev/packages/lindenmayer_systems)<br>
  A Dart library to handle generative grammars
  known as L-Systems (Lindenmayer Systems).
* [package:cutting_room was released](https://pub.dev/packages/cutting_room)<br>
  Compose and render videos with compositions, backed by FFMPEG.
* [package:dart_pusher_channels was released](https://pub.dev/packages/dart_pusher_channels)<br>
  An unofficial pure dart implementation of [Pusher Channels][].
* [package:kroki was released](https://pub.dev/packages/kroki)<br>
  Package for accessing [Kroki.io][] web service 
  for diagram syntax to svg rendering.
* [package:google_vision v0.2.0 was released](https://pub.dev/packages/google_vision)<br>
  Add [Google Vision][] functionality into Dart applications.

[Pusher Channels]: https://pusher.com/channels
[kroki.io]: https://kroki.io/
[Google Vision]: https://cloud.google.com/vision

### Project updates

* [package:enough_email v2.0.0 was released](https://pub.dev/packages/enough_mail/changelog#200)<br>
* [package:sass v1.52.0 was released](https://pub.dev/packages/sass/changelog#1520)<br>
* [package:dart_appwrite v5.0.0 was released](https://pub.dev/packages/dart_appwrite/changelog#500)<br>
* [package:units_converter v2.0.0 was released](https://pub.dev/packages/units_converter/changelog#200)<br>
* [package:twitter_api_v2 v2.0.0 was released](https://pub.dev/packages/twitter_api_v2/changelog#v200)<br>
* [package:meta v1.8.0 was released](https://pub.dev/packages/meta/changelog#180)<br>

## Dart SDK updates

31 unique authors have contributed
[112 commits][commit range]
to the Dart SDK in the past week.

[commit range]: https://github.com/dart-lang/sdk/compare/aa616d6ad84b4fc4bfe0cef7c24aadba64fcd50b...554af2272c2fc662906a2ee1bc412b66da3fece4

The following are some handpicked, interesting changes:

* [[analyzer] AddMissingEnumCaseClauses to handle final and static fields](https://github.com/dart-lang/sdk/commit/cbd12a4672d3f767261acb6fe5c29d0ecfb83934)
* [[js_runtime] Use Math.clz32](https://github.com/dart-lang/sdk/commit/7ff9b2fb5e76cbb9d8bf745a9d70647a5d46a8a4)
* [[analyzer] support code completion for errors and enable-experiment](https://github.com/dart-lang/sdk/commit/36acc59dcbb9f7b5bf95976d182e98e2dd51a9ff)
* [[dart2wasm] Implement FunctionType Type](https://github.com/dart-lang/sdk/commit/5729605e1830a0128f4397ed53f2a049f1e5c775)
* [Add experimental flag inference-update-2](https://github.com/dart-lang/sdk/commit/7b578ca6166b460f6836cdbdd9927ec617469964)
* [[vm, compiler] Support ShadowCallStack on Fuchsia RISC-V](https://github.com/dart-lang/sdk/commit/09b7f36b2faecd8bbf84b983466b65a78e6a0f63)
* [bump to linter 1.24.0](https://github.com/dart-lang/sdk/commit/5ee3a6f07a4493e10741a55c6bcdedaf706f42c1)
* [[vm] Ensure transitive object copy allows low safepoint latencies](https://github.com/dart-lang/sdk/commit/31ae00fb1386ff95eadb9e2bb3e8b86881ca579f)
* [[corelib] Fix bug in VM implementation of BigInt.bitLength](https://github.com/dart-lang/sdk/commit/cbb15c37422247d31a017977a40f4a97526c2ee3)
* [[cfe] Prefix name in enhanced enum constructor](https://github.com/dart-lang/sdk/commit/539cccd8234ee10fddca244d9855ce0e0e5d8c45)
* [[analysis_server] Always show TODOs via LSP if configured as warning/error](https://github.com/dart-lang/sdk/commit/e1a73506d96ab9e820a4260b57bc30ff193e4def)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Work and discussion around
the potential of
static metaprogramming (or macros) in Dart
is still ongoing.
You can read more about macros
in the work in progress [macro feature specification][]
and [Static Metaprogramming in Dart motivation][motivation] documents.

One concern with macros has been the code duplication risk.
Recently, a feature called "aspect macros" has been discussed
as a potential solution.
An `AspectMacro` is used by another macro, 
to generate shared helper code 
which will not be duplicated
across every library where that helper was needed.
To learn more, see the [aspect macros ideas document][].

To learn more about and contribute to discussion
of current and future changes to the Dart language,
visit the [Dart language repository][].

[macro feature specification]: https://github.com/dart-lang/language/blob/master/working/macros/feature-specification.md
[motivation]: https://github.com/dart-lang/language/blob/master/working/macros/motivation.md
[aspect macros ideas document]: https://github.com/dart-lang/language/blob/master/working/macros/aspect-macros.md
 
## Package of the week

The package of the week is [**hive**](https://pub.dev/packages/hive)!

Hive is a lightweight and blazing fast key-value database
written in pure Dart. 
Some of its defining features are as follows:

- Cross platform support: mobile, desktop, browser
- Simple, powerful, & intuitive API
- Strong encryption built in
- No native dependencies

Hive is also looking for new maintainers willing to
support the project and its continued stability.
For more information, 
see their [call for a maintainer](https://github.com/hivedb/hive/issues/966) 
on GitHub.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.


## Upcoming events

Find an event near you or online and
connect with other Dart developers!

Always be sure to check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
for more events as well.

Let us know about other future events on
the [events discussion board][].

### Virtual

* [Flutter Humpday Morning Coffee][flutter-vancouver] | 2022-05-25<br>
  Will start off with introductions 
  and then we will talk about what's new in Flutter world. 
  Then we will move on to what you are working on 
  or what is something you have learned.

### United States

* [Flutter Silicon Valley Meetup #2][flutter-sv] | Palo Alto, CA, US | 2022-05-25<br>
  The second meetup for Flutter Silicon Valley,
  with a community Q&A led by the Google Flutter team,
  as well as other talks by Dart and Flutter professionals.
* [Google I/O Extended NYC 2022][flutter-nyc] | New York, NY, US | 2022-05-26<br>
  Google I/O Extended will be hosted at the flagship Samsung AI space in NYC,
  where you will participate in cutting-edge experiences,
  take part in interactive technology installations,
  browse the newest products and enjoy the event at an amphitheater
  with a larger-than-life, three-story screen.

### Europe

* [Flutter Zürich Hybrid Meetup May 2022][flutter-zh] | Zürich, CH | 2022-05-23<br>
  Presentations and networking both on-site and on Google Meet:
  Flutter Web CI/CD Pipeline with GitHub and Firebase,
  What's new in Flutter 3.0 and where it stands compared,
  and a community round table.
* [#BackToSchool - Intro to Flutter and Google I/O Recap][flutter-school] | Düsseldorf, DE | 2022-05-23<br>
  We'll begin with a short intro to Flutter and its ecosystem
  followed by a chat about the fresh Flutter updates
  from this year's Google I/O.

[flutter-vancouver]: https://www.meetup.com/flutter-vancouver/events/285813734/
[flutter-sv]: https://www.meetup.com/flutter-silicon-valley/events/284957292/
[flutter-nyc]: https://www.meetup.com/flutter-nyc/events/285972001/
[flutter-zh]: https://www.meetup.com/Flutter-Zurich/events/285212777/
[flutter-school]: https://www.meetup.com/flutter-school/events/285741946/


## Quotes and notes

<figure class="quote">
    <blockquote cite="https://twitter.com/mraleph/status/1528450381931589632">
        <p>my first commit to @dart_lang was on Apr 24, 2012 -
          so it's now officially 10 years I work on Dart 😱😱😱</p>
    </blockquote>
    <figcaption>—Vyacheslav Egorov on <cite><a href="https://twitter.com/mraleph/status/1528450381931589632">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/FarialMahmod/status/1526986585384034304">
        <p>Great to see how @flutter & @dart_lang are thriving
          to produce desktop software and
          Linux @ubuntu & @Canonical are welcoming as well.</p>
    </blockquote>
    <figcaption>—Farial Mahmod Tishan on <cite><a href="https://twitter.com/FarialMahmod/status/1526986585384034304">Twitter</a></cite></figcaption>
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

### Very Good Ventures

- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

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

