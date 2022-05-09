# [This Week in Dart](https://thisweekindart.dev)

**This Week in Dart** is the go-to destination
for weekly news on Dart, its package ecosystem, and the surrounding community.

We aim to increase awareness of ongoing changes and news surrounding Dart
while fostering a strong sense of community for those interested.

To contribute this website and future issues,
feel free to contribute on [GitHub](https://github.com/parlough/thisweekindart)
or suggest content for the next week
on [GitHub discussions](https://github.com/parlough/thisweekindart/discussions).

To discuss Dart or This Week in Dart,
feel free to join us
on the [Unofficial Dart Community Discord](https://discord.gg/Qt6DgfAWWx).

## Running the site

To run a development version of the site locally, run: 

```shell
dart run webdev serve pages:9999 web:8080 --auto refresh
```

## Building the site

To build a production version of the site, first run:

```shell
dart run build_runner build --release
```

To then copy generated contents into the desired directory, use:

```shell
dart run build_runner build --release --output web:_site
```

Or, just run `dart run tool/build.dart` which takes care of this for you and
also includes the current time in the atom feed.

## License and disclaimers

Except as otherwise noted, the textual contents of this project are licensed
under the [Creative Commons Attribution 4.0 License][],
and code and code samples are licensed under the MIT License.
See more in the [LICENSE][] file.

_Dart and the related logo are trademarks of Google LLC. 
This Week in Dart is not endorsed by or affiliated with Google LLC._

[Creative Commons Attribution 4.0 License]: http://creativecommons.org/licenses/by/4.0/
[LICENSE]: https://github.com/parlough/thisweekindart/blob/main/LICENSE