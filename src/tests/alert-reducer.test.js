import reducer, { ALERT_TYPES, append, remove } from "../reducers/alert";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({ alerts: [] });
});

test("should handle an alert being added to alerts list", () => {
  const previousState = { alerts: [] };
  expect(
    reducer(
      previousState,
      append({
        id: "alert-id-001",
        alertTitle: "Hello World",
        text: "This is a welcome message from simple alert tests",
        link: "https://www.youtube.com/watch?v=W9tCzsDeeKk",
        alertType: ALERT_TYPES.SUCCESS,
        timeLimit: 10,
      })
    )
  ).toEqual({
    alerts: [
      {
        id: "alert-id-001",
        alertTitle: "Hello World",
        text: "This is a welcome message from simple alert tests",
        link: "https://www.youtube.com/watch?v=W9tCzsDeeKk",
        alertType: ALERT_TYPES.SUCCESS,
        timeLimit: 10,
      },
    ],
  });
});

test("should handle an alert being added to an existing list", () => {
  const previousState = {
    alerts: [
      {
        id: "alert-id-001",
        alertTitle: "Hello World",
        text: "This is a welcome message from simple alert tests",
        link: "https://www.youtube.com/watch?v=W9tCzsDeeKk",
        alertType: ALERT_TYPES.SUCCESS,
        timeLimit: 10,
      },
    ],
  };
  expect(
    reducer(
      previousState,
      append({
        id: "alert-id-002",
        alertTitle: "",
        text: "This is a second alert mesasge without title",
        alertType: ALERT_TYPES.INFO,
        timeLimit: 15,
      })
    )
  ).toEqual({
    alerts: [
      {
        id: "alert-id-001",
        alertTitle: "Hello World",
        text: "This is a welcome message from simple alert tests",
        alertType: ALERT_TYPES.SUCCESS,
        link: "https://www.youtube.com/watch?v=W9tCzsDeeKk",
        timeLimit: 10,
      },
      {
        id: "alert-id-002",
        alertTitle: "",
        text: "This is a second alert mesasge without title",
        alertType: ALERT_TYPES.INFO,
        timeLimit: 15,
      },
    ],
  });
});

test("should handle an alert being removed from an existing list", () => {
  const previousState = {
    alerts: [
      {
        id: "alert-id-001",
        alertTitle: "Hello World",
        text: "This is a welcome message from simple alert tests",
        alertType: ALERT_TYPES.SUCCESS,
        timeLimit: 10,
      },
      {
        id: "alert-id-002",
        alertTitle: "",
        text: "This is a second alert mesasge without title",
        alertType: ALERT_TYPES.INFO,
        timeLimit: 15,
      },
    ],
  };
  expect(reducer(previousState, remove("alert-id-001"))).toEqual({
    alerts: [
      {
        id: "alert-id-002",
        alertTitle: "",
        text: "This is a second alert mesasge without title",
        alertType: ALERT_TYPES.INFO,
        timeLimit: 15,
      },
    ],
  });
});
