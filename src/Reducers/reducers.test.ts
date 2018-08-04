import { initialState } from "../State/State";
import rootReducers, {
  output,
  query,
  rootReducerReset,
  source
} from "./reducers";

describe("Reducers", () => {
  it("rootReducers should run without crashing", () => {
    const results = rootReducers(undefined, { type: "" });
  });

  it("rootReducers should reset", () => {
    const state = {
      output: {
        text: "fake o",
        table: { array: [], isArray: false, isModalOpen: false, displayedColumns: [], columns:[] }
      },
      query: { text: "fake q" },
      source: { text: "fake s" }
    };
    const results = rootReducerReset(state, {
      type: "RESET_EDITOR"
    });

    expect(results.query).toEqual(initialState.query);
    expect(results.source).toEqual(initialState.source);
    expect(results.output).not.toEqual(initialState.output);
  });

  it("update query action should update", () => {
    const state = { text: "initial" };

    const result = query(state, { query: "new value", type: "UPDATE_QUERY" });

    expect(result).toEqual({ text: "new value" });
  });

  it("update source action should update", () => {
    const state = { text: "initial" };

    const result = source(state, {
      source: "new value",
      type: "UPDATE_SOURCE_TEXT"
    });

    expect(result).toEqual({ text: "new value" });
  });

  it("output ", () => {
    const state = {
      output: {
        text: "{}",
        table: { array: [], isArray: false, isModalOpen: false, displayedColumns: [], columns:[] }
      },
      query: { text: "data.value" },
      source: { text: '{"value": "test"}' }
    };

    const result = output(state.output, state.source.text, state.query.text, {
      type: 'EVALUATE_CODE'
    });

    expect(result.text).toEqual('"test"');
    expect(result.table.isArray).toEqual(false);
    expect(result.errorMessage).toBeUndefined();
  });
});
