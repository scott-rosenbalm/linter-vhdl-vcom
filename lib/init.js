'use babel'

import LinterVcomLintProvider from './linter-vhdl-vcom'

export default {
  config: {
    vlogOptions: {
      title: 'Options for vcom command',
      description: 'Comma separated list of vcom options.',
      type: 'array',
      default: ['-lint', '-quiet'],
      order: 0
    },
    includePathsRelativeToTheProject: {
      title: 'Project Include Paths',
      description: 'Comma separated list of include paths, relative to the Atom project root.',
      type: 'array',
      default: [],
      order: 1
    },
    includePathsRelativeToTheSourceFile: {
      title: 'Relative include paths',
      description: 'Comma separated list of include paths, relative to the source file being linted.',
      type: 'array',
      default: [],
      order: 2
    },
    workDir: {
      title: 'Work directory for vcom command',
      description: 'Vlog must create a compiled library. Give a path where the library will go.',
      type: 'string',
      default: 'C:\\_atom_linter_vcom_lib_delete_me',
      order: 3
    },
    ignoredVcomErrorCodes: {
      title: 'Ignored Vcom Error Codes',
      description: 'Comma separated list of vcom error codes to ignore. Number part only... for (vcom-13533), just put \'13533\'',
      type: 'array',
      default: [],
      order: 4
    }
  },

  provideLinter: () => LinterVcomLintProvider
}
