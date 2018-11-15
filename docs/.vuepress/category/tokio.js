exports.tokio = (title) => {
    return [
        '',
        {
          title: '开始',
          collapsable: true,
          children: [
            'getting-started/hello-world',
            'getting-started/futures',
            'getting-started/runtime',
            'getting-started/echo'
          ]
        },
        {
          title: 'Tokio与I/O',
          collapsable: true,
          children: [
            'io/overview',
            'io/reading_writing_data',
            'io/poll',
            'io/async_read_write',
            'io/filesystem',
            'io/datagrams'
          ]
        },
        {
          title: 'Futures-Streams-Sinks',
          collapsable: true,
          children: [
            'futures-streams-sinks/overview',
            'futures-streams-sinks/futures',
            'futures-streams-sinks/streams',
            'futures-streams-sinks/sink',
            'futures-streams-sinks/putting-it-together.md'
          ]
        },
        {
          title: '深入',
          collapsable: true,
          children: [
            'going-deeper/futures',
            'going-deeper/tasks',
            'going-deeper/runtime-model',
            'going-deeper/io',
            'going-deeper/chat',
            'going-deeper/timers',
            'going-deeper/futures-mechanics',
            'going-deeper/returning',
            'going-deeper/frames',
            'going-deeper/building-runtime'
          ]
        },
        {
          title: '内部原理',
          collapsable: true,
          children: [
            'internals/intro',
            'internals/runtime-model',
            'internals/net'
          ]
        },
        'api'
    ]
}