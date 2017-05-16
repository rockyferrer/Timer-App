var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');

        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            expect(timer.state.timerStatus).toBe('started');
            done();
        }, 2001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.setState({count:3})
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');


        setTimeout(() => {
            expect(timer.state.count).toBe(3);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 2000)
    });

    it ('should clear count on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 4000);


    });
});
