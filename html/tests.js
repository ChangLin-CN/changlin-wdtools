var expect = chai.expect;

var c1=new  wdtools.Cookie();

describe('setCookie', function () {
    it('setCookie and get it', function () {
        c1.set('aaa','http://baidu.com?key=3&b=4#p1 ');
        expect(c1.get('aaa')).to.be.equal('http://baidu.com?key=3&b=4#p1 ');
    });
     it('setCookie and remove it', function () {
        c1.set('aaa','http://baidu.com?key=3&b=4#p1 ');
        c1.del('aaa');
        expect(c1.get('aaa')).to.be.equal('');
    });
     it('setCookie (Object)', function () {
        c1.set('obj',{a:3,b:4});
        expect(c1.getObject('obj')).to.be.equal({a:3,b:4});
    });
    
    
});