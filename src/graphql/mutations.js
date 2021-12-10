/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          event_id
          order_id
          event
          order
          createdAt
          updatedAt
          eventOrdersId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          event_id
          order_id
          event
          order
          createdAt
          updatedAt
          eventOrdersId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          event_id
          order_id
          event
          order
          createdAt
          updatedAt
          eventOrdersId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEventOrder = /* GraphQL */ `
  mutation CreateEventOrder(
    $input: CreateEventOrderInput!
    $condition: ModelEventOrderConditionInput
  ) {
    createEventOrder(input: $input, condition: $condition) {
      id
      event_id
      order_id
      event
      order
      createdAt
      updatedAt
      eventOrdersId
      customer
    }
  }
`;
export const updateEventOrder = /* GraphQL */ `
  mutation UpdateEventOrder(
    $input: UpdateEventOrderInput!
    $condition: ModelEventOrderConditionInput
  ) {
    updateEventOrder(input: $input, condition: $condition) {
      id
      event_id
      order_id
      event
      order
      createdAt
      updatedAt
      eventOrdersId
      customer
    }
  }
`;
export const deleteEventOrder = /* GraphQL */ `
  mutation DeleteEventOrder(
    $input: DeleteEventOrderInput!
    $condition: ModelEventOrderConditionInput
  ) {
    deleteEventOrder(input: $input, condition: $condition) {
      id
      event_id
      order_id
      event
      order
      createdAt
      updatedAt
      eventOrdersId
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      events
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      events
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      events
      createdAt
      updatedAt
      customer
    }
  }
`;
