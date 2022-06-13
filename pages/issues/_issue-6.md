---
template: layouts/issue

data:
    date: 2022-06-13
    title: This Week in Dart - Issue 6
    description: The sixth issue of This Week in Dart!
    weight: 6
---

Hello fellow Dartisans!
Welcome to the sixth issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

The next stable release of Dart, likely 2.18,
will see the removal of the deprecated `SCREAMING_CAPS` constants in `dart:io`.

To prepare for this change,
verify you aren't using the deprecated constants 
and use the corresponding `lowerCamelCase` constants instead.


## Community updates



### Discussions


### Learning materials


### Project releases

* [package:daco was released](https://pub.dev/packages/daco)<br>
  A tool for maintaining Dart comments.
  Supports formatting of comments,
  including embedded Dart code.
* [package:supercluster was released](https://pub.dev/packages/supercluster)<br>
  A package for fast marker clustering.
* [package:suntime was released](https://pub.dev/packages/suntime)<br>
  Simple sunrise and sunset time calculation for a given location.
* [package:needle_orm was released](https://pub.dev/packages/needle_orm)<br>
  ORM for dart, inspired by Ebean.io (an ORM from Java/Kotlin world).
  

### Project updates

* [package:solana v0.25.0 was released](https://pub.dev/packages/solana/changelog#0250)
* [package:rad v0.9.0 was released](https://pub.dev/packages/rad/changelog#090)
* [package:melos v2.4.0 was released](https://pub.dev/packages/melos/changelog#240)
* [package:shelf_hotreload v1.2.0 was released](https://pub.dev/packages/shelf_hotreload/changelog#120)
* [package:enough_convert v1.5.0 was released](https://pub.dev/packages/enough_convert/changelog#150)
* [package:graphql_codegen v0.9.0 was released](https://pub.dev/packages/graphql_codegen/changelog#090)
* [package:binary v3.0.0 (with null safety) was released](https://pub.dev/packages/binary/changelog#300)
* [package:wot v0.19.0 was released](https://pub.dev/packages/dart_wot/changelog#0190)


## Dart SDK updates

38 unique authors have contributed
[123 commits](https://github.com/dart-lang/sdk/compare/633822fe73804f6980a18ed87056876f78c9f4b6...1b9554d481ab61ab4c9196e0d2af5628987ae34d)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [`dart fix` for single files](https://github.com/dart-lang/sdk/commit/467a1b05c03878fa9f94779a3af18dcf368254da)
* [[js] Support js_util on dart2wasm](https://github.com/dart-lang/sdk/commit/d872e74a6dcc6e241b0e7ff01d3f254909aaf45d)
* [[dart2js] Late instance field optimizations](https://github.com/dart-lang/sdk/commit/6384eceedc3a947f8dfc44681fd0fe84b1930f1f)
* [[dart2wasm] Implement backward jumps in switch statements](https://github.com/dart-lang/sdk/commit/1456af7b977e3d5fcc4f12569c990b938b01a284)
* [Remove SCREAMING dart:io networking APIs](https://github.com/dart-lang/sdk/commit/abfdc3d50f6cf66165767da8df4f681a68467178)
* [[vm, gc] Evaluate old-gen GC on each new-gen page](https://github.com/dart-lang/sdk/commit/88ca1e95b8fd4b756fd7be773a44745300b12c41)
* [Refactor `_Future`](https://github.com/dart-lang/sdk/commit/69f32d6ad7e724e3148cb2eb6601e63165e76ad3)
* [[vm] Always complete Future synchronously when returning non-Future value from async functions](https://github.com/dart-lang/sdk/commit/213ae5429b9efb4cdaad40619b3b037a38be5013)
* [[vm] More efficient 'await' of not Future and completed _Future](https://github.com/dart-lang/sdk/commit/6b3d1752fad1a2980e8c51ef6033d98061362a04)
* [Enable lints to have context messages](https://github.com/dart-lang/sdk/commit/02049223fd4f8787feed3a9ff4868e6e7704d54b)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

 
## Package of the week

The package of the week is [**X**](https://pub.dev/packages/)!

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

[fig-dig]: https://www.meetup.com/fig-dig-minneapolis-stpaul-flutter-interest-group/events/xtkvssydcjbjb/
[toronto]: https://www.meetup.com/flutter-toronto-group/events/286019021/

## Quotes and notes

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

### Workiva

- [Senior Software Engineer - Frontend Frameworks (Remote, US)](https://workiva.wd1.myworkdayjobs.com/en-US/careers/job/Senior-Software-Engineer---Frontend-Frameworks_R5084)
- [Other frontend jobs](https://workiva.wd1.myworkdayjobs.com/en-US/careers?q=frontend)

### Paramount

- [Senior Software Engineer - Flutter Development (Remote, US)](https://careers.viacomcbs.com/job/New-York-Senior-SWE-Flutter-Development-NY-10036/882329700)

### Tonal

- [Mobile Engineer (Flutter) (NY, US)](https://jobs.lever.co/tonal/b47beb5f-ad20-4bdf-b28d-f1c3bf2273de)

### IBM

- [Senior Software Developer - Flutter (Remote, US)](https://careers.ibm.com/job/15419705/senior-software-developer-flutter-remote)

### Very Good Ventures

- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)


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

