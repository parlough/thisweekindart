---
template: layouts/issue

data:
    date: 2022-07-04
    title: This Week in Dart - Issue 9
    description: The ninth issue of This Week in Dart!
    weight: 9
---

Hello fellow Dartisans!
Welcome to the ninth issue of _This Week in Dart!_
_This Week in Dart's_ aim is to be a useful collection of changes and news
from across the Dart ecosystem and its surrounding community.

To contribute to this and future issues,
feel free to contribute on [GitHub][]
or suggest content for next week on [GitHub discussions][].

To discuss this week's issue,
feel free to join us on the [Unofficial Dart Community Discord][]
in the `#this-week-in-dart` channel.

## Announcements

The previously deprecated `dartanalyzer` tool
is set to be removed from the Dart SDK in Dart 2.19.
You should migrate your usage and tooling
to instead use the [`dart analyze`][dart analyze] command
that is part of the unified `dart` tool.

[DartPad][], the online code playground for Dart and Flutter,
now has built-in support for creating and sharing GitHub gists
from within the editor.

[DartPad]: https://dartpad.dev/
[dart analyze]: https://dart.dev/tools/dart-analyze

## Community updates

### Discussions

- [I've migrated a text editor library (13K LOC) from no state management (spaghetti code) to state management...](https://www.reddit.com/r/dartlang/comments/vqoa8j/ive_migrated_a_text_editor_library_13k_loc_from/)
- [Dartness: the dart web framework](https://www.reddit.com/r/dartlang/comments/vqiu26/dartness_the_dart_web_framework/)
- [Compiler optimizations of final & immutable datatypes?](https://www.reddit.com/r/dartlang/comments/vm6gn2/compiler_optimizations_of_final_immutable/)
- [Obstacles in Dart Decompilation & the Impact on Flutter App Security](https://www.guardsquare.com/blog/obstacles-in-dart-decompilation-and-the-impact-on-flutter-app-security)
- [What is Flutter? Mobile app development for Android, iOS, and more](https://www.infoworld.com/article/3664122/what-is-flutter-mobile-app-development-for-android-ios-and-more.html)

### Learning materials

- [Dart Null safety codelab - Null-aware operators](https://dart.dev/codelabs/null-safety#null-aware-operators)
- [Initialize Objects Without Data - Learn Dart Programming](https://www.youtube.com/watch?v=N32BS93HtiE)

### Project releases

* [package:elixir was released](https://pub.dev/packages/elixir)<br>
  Tool for commenting `dart analyze` results on GitHub pull requests.
* [package:secretary was released](https://pub.dev/packages/secretary)<br>
  A sophisticated tool for managing queues of asynchronous tasks,
  with a stream interface, strong typing and lots of helpful options.
* [package:dartness_server was released](https://pub.dev/packages/dartness_server)<br>
  A framework for building efficient, scalable dart server-side applications.
  It provides an easy and quick way to develop modern standalone server.
* [package:shelf_swagger_ui was released](https://pub.dev/packages/shelf_swagger_ui)<br>
  Present clean and professional documentation with Swagger + shelf.

### Project updates

* [Dart Code for VS Code v3.44.0 was released](https://dartcode.org/releases/#v3440-2022-07-01)
* [package:bones_ui v2.0.13 was released](https://pub.dev/packages/bones_ui/changelog#2013)
* [package:objectbox v1.6.0 was released](https://pub.dev/packages/objectbox/changelog#160-2022-06-27)
* [package:appwrite v6.0.0 was released](https://pub.dev/packages/dart_appwrite/changelog#600)
* [package:jaspr v0.1.5 was released](https://pub.dev/packages/jaspr/changelog#015)
* [package:oepnfoodfacts v1.20.0 was released](https://pub.dev/packages/openfoodfacts/changelog#1200httpsgithubcomopenfoodfactsopenfoodfacts-dartcomparev1190v1200-2022-06-29)
* [package:mysql1 v0.20.0 was released](https://pub.dev/packages/mysql1/changelog)
* [package:fennec v0.0.9 was released](https://pub.dev/packages/fennec/changelog#009)


## Dart SDK updates

29 unique authors have contributed
[106 commits](https://github.com/dart-lang/sdk/compare/bf3652e57f31e8e658ccbe6a3d853266e798d679...ecba15b64164d271dbb0734c19610faf645f866c)
to the Dart SDK in the past week.

The following are some handpicked, interesting changes:

* [[vm] New implementation of sync* based on suspend/resume stubs](https://github.com/dart-lang/sdk/commit/77ea9820aaa440be32313c257b2e08f41aaf13d8)
* [[analysis_server] fix RemoveUnnecessaryParentheses with space](https://github.com/dart-lang/sdk/commit/9f5942df4c4f62407f8a3db2d74d110897bb54f0)
* [[dart:html] Add MathMLElement](https://github.com/dart-lang/sdk/commit/fe93b161e0a920d59cff1742c8340b9d9155484e)
* [This is a precursor CL to a client side only InterfaceType class...](https://github.com/dart-lang/sdk/commit/e43aad19844d81319cb84781c5bcfb0837bf889c)
* [[vm, gc] Make force-growth a thread-local property](https://github.com/dart-lang/sdk/commit/1c461e06c1d53cf60e4458bb89b2a1543266bd95)
* [[CFE] Add constant replacer](https://github.com/dart-lang/sdk/commit/0036dc7c573d6e782a6b40257d8c701c02cbb5f6)
* [[vm] Avoid clobbering array length in AllocateArray stub on ARM](https://github.com/dart-lang/sdk/commit/ec9a660ccca94edaf04051192282c7ecaf2bcccc)
* [Remove dartanalyzer from built SDK](https://github.com/dart-lang/sdk/commit/822cd1cbd54517bfcb782ecc23357c31b1c7a8b1)
* [Bump DevTools to version 2.15.0](https://github.com/dart-lang/sdk/commit/ffb598f3b5c3de1b4d0ca10608cd613407bfeec1)

_Keep in mind, none of these changes are guaranteed to
eventually land in a stable release._


## Language updates and discussion

While large changes have been minimal over this past week,
there are constant changes and improvements to the language 
being discussed and implemented.

One commonly requested one is the introduction
of expanded capability modifiers for classes and mixins.
These keywords can limit some functionality of these types,
such as subclassing, implementing, or unlimited declarations.
Allowing the creator to limit these capabilities
can not only enable for easier API expansion over time
but is necessary for some features such as [pattern matching][].

To read more about these potential capability modifiers,
reference the working proposal of [Type Modifiers][].

To learn more about and contribute to discussion
of this and other potential changes to the Dart language,
visit the [Dart language repository][].

[pattern matching]: https://github.com/dart-lang/language/blob/master/working/0546-patterns/patterns-feature-specification.md
[Type Modifiers]: https://github.com/dart-lang/language/blob/master/working/type-modifiers/feature-specification.md

 
## Package of the week

The package of the week is [**sass**](https://pub.dev/packages/sass)!

`package:sass` is the primary implementation of Sass, 
an expansive, CSS extension language.
As the primary implementation, 
it receives new features before any other implementation. 
It's fast, easy to install, 
and it can compile to pure JavaScript 
to easily integrate into modern web development workflows.

Sass has been an important part
of the web development landscape for many years,
improving the productivity of all types of developers.
The primary implementation being in Dart for the past few years
showcases the strength of Dart beyond UI programming,
instead as a general-purpose language.

To incorporate Sass into your Dart web application workflow,
consider the third-party [sass_builder][] package,
which transpiles Sass files using Dart's build system.

Dart's package ecosystem is growing fast,
and we want to help foster that growth.
If you know of any great open source projects,
let us know by [suggesting a package][] on GitHub discussions.

[Sass]: https://sass-lang.com/
[sass_builder]: https://pub.dev/packages/sass_builder


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
    <blockquote cite="https://www.reddit.com/r/dartlang/comments/vogg2m/learned_dart_and_flutter_this_is_amazing">
        <p>I've only known Dart and Flutter for a few days (learned Dart 3 days ago),
        but it's so easy it took me almost no time to create basic apps! 
        Dart is a hidden gem in the Android dev community!</p>
    </blockquote>
    <figcaption>—NetsuDagneel on <cite><a href="https://www.reddit.com/r/dartlang/comments/vogg2m/learned_dart_and_flutter_this_is_amazing">/r/dartlang</a></cite></figcaption>
</figure>

<figure class="quote">
    <blockquote cite="https://www.reddit.com/r/dartlang/comments/vogg2m/comment/iedh60b">
        <p>once you go dart, it will steal your heart</p>
    </blockquote>
    <figcaption>—milogaosiudai on <cite><a href="https://www.reddit.com/r/dartlang/comments/vogg2m/comment/iedh60b">/r/dartlang</a></cite></figcaption>
</figure>

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

### IBM

- [Senior Software Developer - Flutter (Remote, US)](https://careers.ibm.com/job/15419705/senior-software-developer-flutter-remote)
- [(Senior) Flutter Developer (Berlin, DE)](https://ibmix.de/job/u1597-senior-flutter-developer-w-m-x/)

### ByteDance

- [Flutter Engineer, Lark Innovations (CA, US)](https://jobs.bytedance.com/en/position/7068418698784540965/detail)

### Very Good Ventures

- [Flutter Engineer (Poland)](https://apply.workable.com/very-good-ventures/j/A6EE352EC7/)
- [Senior Flutter Engineer (Remote, US)](https://apply.workable.com/very-good-ventures/j/9DB5DCF67F/)

### Superformula

- [Mobile Flutter Engineer (Remote, Americas)](https://careers.superformula.com/o/mobile-flutter-engineer-americas)


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

