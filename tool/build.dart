import 'dart:io';

Future<void> main() async {
  final time = DateTime.now().toUtc().toIso8601String();
  final dartExecutable = Platform.executable;

  // We generate an atom feed, which is required to include a timestamp of when
  // it was updated. Builds need to be deterministic though, so a builder can't
  // use `DateTime.now()` in an output. We work around this by passing the
  // current time as a build option to `built_site`, which means that we can
  // read it through `{{ built_site.config.build_time }}` in Liquid.
  final define = '--define=built_site=build_time=$time';

  await _runProcess(dartExecutable, [
    'run',
    'build_runner',
    'build',
    '--release',
    define,
  ]);

  await _runProcess(dartExecutable, [
    'run',
    'build_runner',
    'build',
    '--release',
    define,
    '--output',
    'web:_site',
  ]);
}

Future<void> _runProcess(String executable, List<String> args) async {
  print('Running $executable ${args.join(' ')}');

  final process = await Process.start(executable, args,
      mode: ProcessStartMode.inheritStdio);
  final exitCode = await process.exitCode;
  if (exitCode != 0) {
    exit(exitCode);
  }
}
