export const typeDefs = `
  type Channel {
    id: ID!         # "!" means required
    name: String
  }

  # This type specifies the entry points into our API. In this case
  # there is only one - "channels" - which returns a list of chantype Query {
     channels: [Channel]    # "[]" means this is a list of channels
  }
`