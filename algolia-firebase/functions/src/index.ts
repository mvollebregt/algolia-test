import * as functions from 'firebase-functions';
import algoliasearch from 'algoliasearch';

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
// const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = 'test';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

// Update the search index every time a blog post is written.
exports.onEventCreated = functions.firestore.document('events/{eventId}').onCreate((snap, context) => {
  // Get the event document
  const event = snap.data();
  if (event) {

    // Add an 'objectID' field which Algolia requires
    event.objectID = context.params.eventId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(event);
  } else {
    return Promise.resolve();
  }

});
