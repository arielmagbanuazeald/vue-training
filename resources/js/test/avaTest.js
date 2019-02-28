import Vue from 'vue';
import test from 'ava';
import RegularNotification from '../RegularNotification';

test('that it renders a notification', t => {
    t.is(RegularNotification.data().message, 'Hello World');
});
