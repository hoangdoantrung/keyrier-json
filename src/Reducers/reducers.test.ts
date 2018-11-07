import {
  output,
  query,
  rootReducerReset,
  source,
  containsTerm,
} from './reducers';
import { getInitialAppState } from '../State/State';

describe('Reducers', () => {
  it('rootReducers should reset', () => {
    const state = {
      output: {
        text: 'fake o',
        obj: {},
        searchTerm: '',
        table: {
          array: [],
          isArray: false,
          isModalOpen: false,
          displayedColumns: [],
          columns: [],
          groupBy: [],
        },
      },
      query: { text: 'fake q' },
      source: { text: 'fake s' },
    };
    const results = rootReducerReset(state, {
      type: 'RESET_EDITOR',
    });

    expect(results.query).toEqual(getInitialAppState().query);
    expect(results.source).toEqual(getInitialAppState().source);
  });

  it('update query action should update', () => {
    const state = { text: 'initial' };

    const result = query(state, { query: 'new value', type: 'UPDATE_QUERY' });

    expect(result).toEqual({ text: 'new value' });
  });

  it('update source action should update', () => {
    const state = { text: 'initial' };

    const result = source(state, {
      source: 'new value',
      type: 'UPDATE_SOURCE_TEXT',
    });

    expect(result).toEqual({ text: 'new value' });
  });

  it('output ', () => {
    const state = {
      output: {
        text: '{}',
        obj: {},
        searchTerm: '',
        table: {
          array: [],
          isArray: false,
          isModalOpen: false,
          displayedColumns: [],
          columns: [],
          groupBy: [],
        },
      },
      query: { text: 'data.value' },
      source: { text: '{"value": "test"}' },
    };

    const result = output(state.output, state.source.text, state.query.text, {
      type: 'EVALUATE_CODE',
    });

    expect(result.text).toEqual('"test"');
    expect(result.table.isArray).toEqual(false);
    expect(result.errorMessage).toBeUndefined();
  });

  it('should filter object from tree if search term is not found', () => {
    const { filteredObj, match } = containsTerm(
      {
        field1: {
          field3: 42,
          field4: 'val',
          field5: 'la tête à toTo est tombée.',
        },
        field2: {
          filed6: {},
        },
        field7: {
          field8Toto: { a: 42 },
        },
        field9: {
          field10Array: [{ field11: 'toto' }, { field12: { field13: 'éà' } }],
        },
      },
      'toto'
    );

    expect(match).toBeTruthy();
    expect(filteredObj).toEqual({
      field1: {
        field5: 'la tête à toTo est tombée.',
      },
      field7: {
        field8Toto: { a: 42 },
      },
      field9: {
        field10Array: [{ field11: 'toto' }],
      },
    });
  });

  test('should not match if search term is not found', () => {
    const { filteredObj, match } = containsTerm(
      {
        field1: {
          field3: 42,
          field4: 'val',
          field5: 'la tête est tombée.',
        },
        field2: {
          filed6: {},
        },
        field7: {
          field8Momo: { a: 42 },
        },
      },
      'toto'
    );

    expect(match).toBeFalsy();
    expect(filteredObj).toEqual({});
  });
});
