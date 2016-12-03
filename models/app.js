module.exports = {
  state: {
    lanes: [
      {
        title: 'todo',
        stories: [
          {
            title: 'cool story bro',
            body: 'hello world'
          },
          {
            title: 'cool story bro 2',
            body: 'hello world again'
          }
        ]
      },
      {
        title: 'in progress',
        stories: [
          {
            title: 'cool story bro',
            body: 'hello world'
          },
          {
            title: 'cool story bro 2',
            body: 'hello world again'
          }
        ]
      }
    ]
  },
  reducers: {
    // addStory: (data, state) => {
    //   return state.lanes[data.index].stories.push({ title: '', body: '' })
    // },
    // addLane: (data, state) => ({}),
    // update: (data, state) => ({ title: data.value })
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: (data, state, send, done) => {
      // do stuff
    }
    */
  },
  subscriptions: [
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    (send, done) => {
      // do stuff
    }
    */
  ]
}
