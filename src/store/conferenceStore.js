import { defineStore } from 'pinia';

export const useConferenceStore = defineStore('conference', {
  state: () => ({
    selectedConference: null
  }),
  actions: {
    setSelectedConference(conference) {
      this.selectedConference = conference;
    },
    getSelectedConference() {
      return this.selectedConference;
    }
  }
});