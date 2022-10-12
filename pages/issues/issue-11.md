---
template: layouts/issue

data:
    date: 2022-10-10
    title: This Week in Dart - Issue 11
    description: The eleventh issue of This Week in Dart!
    weight: 11
---

Hello fellow Dartisans!
Welcome to the eleventh issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

[GitHub now supports Dart][] in its 
[Advisory Database][], [dependency graph][], 
as well as [Dependabot alerts][] and [Dependabot security updates][].
This means GitHub now has comprehensive support for 
monitoring and maintaining supply chain security
for Dart and Flutter apps.

Supply chain security has been a recent focus of the Dart and Flutter teams,
you can read more about their use of [Allstar and Security scorecards][]
and some of Flutter's work towards [improving their
Supply Chain Levels for Software Artifacts][slsa] (SLSA).

[GitHub now supports Dart]: https://medium.com/dartlang/partnering-with-github-on-an-supply-chain-security-485eed1fc388
[Advisory Database]: https://github.com/advisories?query=type%3Areviewed+ecosystem%3Apub
[dependency graph]: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph
[Dependabot alerts]: https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts
[Dependabot security updates]: https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates

[Allstar and Security scorecards]: https://opensource.googleblog.com/2022/06/Dart-and-Flutter-enable-Allstar-and-Security-Scorecards.html
[slsa]: https://opensource.googleblog.com/2022/09/flutter-slsa-progress-identity-and-access-management-through-infrastructure-as-code.html


## Community updates

### Official updates

- [Partnering with GitHub on supply chain security for Dart packages](https://medium.com/dartlang/partnering-with-github-on-an-supply-chain-security-485eed1fc388)
- [Flutter SLSA Progress & Identity and Access Management through Infrastructure As Code](https://opensource.googleblog.com/2022/09/flutter-slsa-progress-identity-and-access-management-through-infrastructure-as-code.html)
- [The Dart SDK Archive now includes release dates](https://dart.dev/get-dart/archive)

### Discussions

- [GitHub’s supply chain security features now support Dart](https://github.blog/2022-10-06-githubs-supply-chain-security-features-now-support-dart/)
- [Flutter Linting and Linter Comparison](https://rydmike.com/blog_flutter_linting)
- [Very Good Ranch: A very good game made with Flutter](https://verygood.ventures/blog/very-good-ranch-game)
- [dart:io readAsBytes will crash if the file size is greater than INT_MAX on flutter windows embedder](https://github.com/dart-lang/sdk/issues/50129)

### Learning materials

- [Equality in Dart | Decoding Flutter](https://www.youtube.com/watch?v=DCKaFaU4jdk)
- [Introduction to Dart VM (updated)](https://mrale.ph/dartvm/)
- [Use Local SQL with Dart Drift — The Crash Course](https://tomicriedel.medium.com/dc97b7f088c2)
- [ServerPod | The missing server for Flutter](https://www.youtube.com/watch?v=3Q2vKGacfh0)
- [Mixin in Dart | Dart mixins | Dart Tutorial #57](https://www.youtube.com/watch?v=03X0QWT6zCw)
- [A guide to choosing Dart parameter types](https://onepub.dev/Blog?id=sppsdavuhn)

### Project releases

* [package:google_identity_services_web was released](https://pub.dev/packages/google_identity_services_web)<br>
  A Dart JS-interop layer for Google Identity Services,
  Google's new sign-in SDK for Web that supports multiple types of credentials.
* [package:dart_prism was released](https://pub.dev/packages/dart_prism)<br>
  A syntax highlighting library written in Dart, ported from PrismJS.
* [package:isolated_download_manager was released](https://pub.dev/packages/isolated_download_manager)<br>
  File download manager based on reusable isolates
  with progress, cancellation, pause, and resume.
* [package:dart_lame was released](https://pub.dev/packages/dart_lame)<br>
  Dart native bindings to LAME (MP3 encoder).
* [package:irishman was released](https://pub.dev/packages/irishman)<br>
  A generic programming language interpreter, linter, formatter, and more written in Dart.

### Project updates

* [Dart Code for VS Code v3.50.0 was released](https://dartcode.org/releases/#v3500-2022-10-03)
* [package:dawn v6.0.0 was released](https://pub.dev/packages/dawn/changelog#600)
* [package:dart_nats v0.5.0 was released](https://pub.dev/packages/dart_nats/changelog#050)
* [package:slang v3.1.0 was released](https://pub.dev/packages/slang/changelog#310)
* [package:smartstruct v1.3.0 was released](https://pub.dev/packages/smartstruct/changelog#v130)
* [package:custom_list v0.0.12 was released](https://pub.dev/packages/custom_lint/changelog#0012)
* [package:drift v2.2.0 was released](https://pub.dev/packages/drift/changelog#220)
* [package:stock v1.0.0 was released](https://pub.dev/packages/stock/changelog#100)
* [package:loggin v1.1.0 was released](https://pub.dev/packages/logging/changelog#110)
* [package:puppeteer v2.14.0 was released](https://pub.dev/packages/puppeteer/changelog#2140)


## Dart SDK updates

33 unique authors have contributed
[129 commits](https://github.com/dart-lang/sdk/compare/06847c34fba4c439fa48b7d52346a5d865588c6f...20fff85f104a06aef7816df8d9113bcdcf9a9a55)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

- [[vm] Support dynamic access to record fields in JIT mode](https://github.com/dart-lang/sdk/commit/b5061ffae1666badcec6e90945b48a375c45e2ff)
- [[vm, gc] Don't use alignment bits when verifying eliminated write barriers](https://github.com/dart-lang/sdk/commit/7e4f448f789f2e83470ed32ec4fa22a9014bf101)
- [[cfe,vm] Support 'records' experiment in the sdk](https://github.com/dart-lang/sdk/commit/99f60a5e662a7951dd5ab3bf0d4ba76e2d18db5d)
- [[vm/aot/tfa] Fix optimization of 'is' tests for FutureOr of nullable types](https://github.com/dart-lang/sdk/commit/6de81be8d1da6301cff9770fae0b7e44bcb30923)
- [[dart2wasm] Implement null instance tear-offs](https://github.com/dart-lang/sdk/commit/113f249e06fa05c15b1e0f5e132020eaf5e7ad34)
- [[dart2wasm] Refactor run_wasm.js into an ESM module that is reusable in the browser](https://github.com/dart-lang/sdk/commit/47dd60fed0fd195bf4a2352b2d8337a0ff9ebc6b)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Records have been seeing extensive implementation work
across all parts of the SDK over the past month,
and some final touches of its language specification
alongside fixes and improvements have been made as well.

One large change from the past week was the specification
of how type inference and static semantics work for records,
paving the way for the Dart front-end to implement type inference.
You can find these changes and related feedback
for the v1.14 version of the feature specification
in the [Static semantics for records][] pull request.

To learn more about records, see the [Records feature specification][]
and to contribute to the surrounding discussion
check out issues with the [Records tag][].

To learn more about and contribute to discussion
of these and other potential changes to the Dart language,
visit the [Dart language repository][].

[Static semantics for records]: https://github.com/dart-lang/language/pull/2489
[Records feature specification]: https://github.com/dart-lang/language/blob/master/accepted/future-releases/records/records-feature-specification.md
[Records tag]: https://github.com/dart-lang/language/issues?q=is%3Aopen+is%3Aissue+label%3Arecords


## Package of the week

The package of the week is [**petitparser**](https://pub.dev/packages/petitparser)!

`package:petitparser` is a 
"dynamic parser framework to build efficient grammars and parsers quickly".
The package aims to include ideas and techniques from scannerless parsing,
parser combinators, parsing expression grammars, and packrat parsers
to allow developers to model and builder grammars and parsers as objects
that can be updated dynamically.

PetitParser is a great way for both beginners and experts
to build grammars and parsers for any type of project,
with a great and fast development cycle
due to its dynamically configurable nature.
Many popular projects on pub.dev use the package for their parsing needs,
such as [`package:xml`][], [`package:toml`][], [`package:equations`][], 
and many more!

To learn more about PetitParser 
and utilizing it to build your first parser,
see it's [extensive tutorial][petit-tutorial]
and its [collection of examples][petit-examples].

Thanks to [@felixalguzman](https://github.com/felixalguzman)
for the suggestion!

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[`package:xml`]: https://pub.dev/packages/xml
[`package:toml`]: https://pub.dev/packages/toml
[`package:equations`]: https://pub.dev/packages/equations
[petit-tutorial]:https://pub.dev/packages/petitparser#tutorial
[petit-examples]: https://github.com/petitparser/dart-petitparser-examples


## Upcoming events

Check the [Flutter Meetup Network][]
and the [Dart Language][Dart Meetup] tag on Meetup
to find an event near you or online and
connect with other Dart developers!

Let us know about other future events on
the [events discussion board][].

### Europe

* [Serverpod release party][serverpod-release] | Stockholm, Sweden | 2022-10-13<br>
  Flutter Stockholm will be celebrating the 1.0 release of Serverpod. 
  Serverpod is an open-source, 
  scalable app server written in Dart for the Flutter community. 
  It's been over a year in the making, 
  and is finally ready to see the light of day!

[serverpod-release]: https://www.meetup.com/flutter-sweden/events/288519365/

## Quotes and notes

Share quotes and comments you see and hear about Dart
on our [quotes discussion board][] for future inclusion!

<figure class="quote">
    <blockquote cite="https://twitter.com/flutter_exp/status/1578318212411760640">
        <p>#Dart is an incredible programming language and should be considered for more backend projects!</p>
    </blockquote>
    <figcaption>—@flutter_exp (Max Weber) on <cite><a href="https://twitter.com/flutter_exp/status/1578318212411760640">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://twitter.com/LeafPetersen/status/1577455408004091905">
        <p>The patterns proposal (also from @munificentbob, he's on a tear) 
           is also looking fantastic: 
           <a href="https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md">Patterns features specification</a>.
           I'm pretty excited about this one.
        </p>
    </blockquote>
    <figcaption>—@LeafPetersen (Leaf Petersen) on <cite><a href="https://twitter.com/LeafPetersen/status/1577455408004091905">Twitter</a></cite></figcaption>
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