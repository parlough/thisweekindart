---
template: layouts/issue

data:
  date: 2022-05-09
  title: This Week in Dart - Issue 0
  description: The inaugural issue of This Week in Dart!
  weight: 0
---

Hello fellow Dartisans! 
Welcome to the inaugural issue of _This Week in Dart_!
_This Week in Dart's_ aim is to be a useful collection of changes and news 
from across the Dart ecosystem and its surrounding community. 

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.


## Announcements

Google I/O will be this week, May 11-12, available to stream online.
This year will see 
keynotes, product announcements, and learning lab content released on day one, 
with technical sessions available on-demand on day two. 

Dart will have a large presence
in the form of keynotes, talks, and workshops around Flutter.
To learn more and register, check out [Google I/O 2022][].


## Community updates

### Official

* [Bulk application of fixes](https://medium.com/dartlang/bulk-application-of-fixes-e6add333c3c1)
* [Does Flutter boost developer productivity?](https://medium.com/flutter/does-flutter-boost-developer-productivity-475f713724b3)
* [Learning Dart as a JavaScript developer](https://dart.dev/guides/language/coming-from/js-to-dart)

### Discussions

* [Flutter Performance - Flying High With Flutter](https://www.youtube.com/watch?v=BOj-ZEHf6EA)

### Learning materials

* [Programming in Dart: Control Flow & Collections](https://www.raywenderlich.com/29744101-programming-in-dart-control-flow-collections)
* [O guia de Dart (Portuguese Dart Book)](https://www.casadocodigo.com.br/products/livro-dart)

### Project updates

* [package:wav was released](https://pub.dev/packages/wav)
* [package:twitter_api_v2 was released](https://pub.dev/packages/twitter_api_v2)


## Dart SDK updates

38 unique authors have contributed 
[112 commits][commit range] 
to the Dart SDK in the past week.

[commit range]: https://github.com/dart-lang/sdk/compare/630302b710c378c04ef234867da58c85087a8b81...748ee46cf4710e3a9e45fa376db0164492e8f020

The following are some handpicked, interesting changes.

* [[vm] Remove the branch from pointer decompression in the runtime](https://github.com/dart-lang/sdk/commit/49c039b5ab7b9d5a063ef735208c40e98383fa9b)
* [Add 2.17 language features to CHANGELOG](https://github.com/dart-lang/sdk/commit/65e751c5c3239b338b17329d5b0aa6c6a144dd67)
* [[analysis_server] Improve performance of LSP completions](https://github.com/dart-lang/sdk/commit/e82d6d1a4f4fbf6a425ac9a4ad449f0304344f75)
* [Release DevTools 2.13.0](https://github.com/dart-lang/sdk/commit/77002f991e860b56fdaca73742eab34817a35fb3)
* [[vm] Only call .hashCode once when adding to Map and Set](https://github.com/dart-lang/sdk/commit/438c1ed2ba5966fee2e5e44f13956154358492f9)
* [[vm/aot] Trim user-defined entries from classes constants table](https://github.com/dart-lang/sdk/commit/5898dcd1ad59a03b0a0055e5c0dea9a5f95a679b)
* [[vm] Function::packed_fields is not used in AOT.](https://github.com/dart-lang/sdk/commit/322410e5cda57258c5d9dc7830ca138603c49570)
* [bump to linter 1.23.0](https://github.com/dart-lang/sdk/commit/226fceaef2341f294e1c80a536ce07420ab65189)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Package of the week

The package of the week is [**Zap**](https://pub.dev/packages/zap)!

Zap is a reactive web framework built on Dart. 
By compiling HTML-like files to Dart components, 
Zap makes it easy to write efficient web apps.

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

* Google I/O | 2022-05-11 - 2022-05-12<br>
  Find more information and register at [Google I/O 2022][].<br>
  Join local, extended events at [I/O Extended][].

[I/O Extended]: https://gdg.community.dev/ioextended/


## Quotes and notes

<figure class="quote">
    <blockquote cite="https://twitter.com/timsneath/status/1521195568785096704">
        <p>One of my favorite things about @DartCode is how it ships
          productivity features that I didn't know I needed, 
          but become huge timesavers as soon as they arrive. 
          Go To Type Definition is a great example.</p>
    </blockquote>
    <figcaption>—Tim Sneath on <cite><a href="https://twitter.com/timsneath/status/1521195568785096704">Twitter</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://www.reddit.com/r/dartlang/comments/ujtgux/comment/i7ln8mm/?utm_source=share&utm_medium=web2x&context=3">
        <p>Love to see how the language evolves!</p>
    </blockquote>
    <figcaption>—MoistCaterpillar8063 on <cite><a href="https://www.reddit.com/r/dartlang/comments/ujtgux/comment/i7ln8mm">/r/dartlang</a></cite></figcaption>
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

### Invertase

- [Open Source Engineer - FlutterFire (Europe - Remote)](https://invertase.io/careers/flutterfire-dart-engineer)

### Very Good Ventures

- [Senior Flutter Engineer (United States)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superlist

- [Senior Flutter (Desktop) Developer](https://superlist.recruitee.com/o/senior-flutter-desktop-developer-mfd)


[Google I/O 2022]: https://io.google/2022
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
