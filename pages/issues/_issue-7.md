---
template: layouts/issue

data:
    date: 2022-06-20
    title: This Week in Dart - Issue 7
    description: The seventh issue of This Week in Dart!
    weight: 7
---

Hello fellow Dartisans!
Welcome to the seventh issue of _This Week in Dart!_
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
will see the removal of the deprecated `dart2js` and `dartdevc` commands.

To compile web applications for production,
instead use [`dart compile js`][],
and to develop web apps use tools like [`webdev`][].

A future release of Dart, possibly 2.19,
will see complete support for mixin of classes 
that don't extend `Object` removed.
See the [breaking change request][48167] for more information
on the change and migration help.

[`dart compile js`]: https://dart.dev/tools/dart-compile#js
[`webdev`]: https://dart.dev/tools/webdev
[48167]: https://github.com/dart-lang/sdk/issues/48167

## Community updates

### Discussions

### Learning materials

### Project releases

### Project updates


## Dart SDK updates

35 unique authors have contributed
[141 commits](https://github.com/dart-lang/sdk/compare/1b9554d481ab61ab4c9196e0d2af5628987ae34d...651db75ff4ac0e11e5f0f6414c26a75c4ae50dde)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:


_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

Changes and improvements to the language specification
are continuously being discussed and implemented.

Recently, static programming through [macros][]
has been the focus of many discussions.
An in-progress proposal raising reflected imports
as a solution to some usability problems with macros
was added this week.

To learn more and perhaps comment on reflected imports,
see the [Reflected Imports Feature Specification][].

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

[macros]: https://github.com/dart-lang/language/blob/master/working/macros/feature-specification.md
[Reflected Imports Feature Specification]: https://github.com/dart-lang/language/blob/master/working/reflected-imports/feature-specification.md

 
## Package of the week

The package of the week is [**freezed**](https://pub.dev/packages/freezed)!

`package:freezed` is a package for Dart that provides
code generation for immutable classes 
and has a simple syntax/API without compromising on the features.

freezed provides many features focused around
generating classes representing models,
including support for data classes, unions,
pattern matching, handled serialization, and more.

You can learn more about freezed,
how to set it up, and how to use it
on its [pub page][freezed-pub].

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[freezed-pub]: https://pub.dev/packages/freezed


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

