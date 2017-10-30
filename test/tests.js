
describe('Cookie', function () {
    var c1=new  wdtools.Cookie();
    var c2=new  wdtools.Cookie({maxAge:1});
    
    
    
    it('setCookie and get it', function () {
        c1.setCookie('aaa','http://baidu.com?key=3&b=4#p1 ');
        expect(c1.getCookie('aaa')).to.be.equal('http://baidu.com?key=3&b=4#p1 ');
    });
     it('setCookie and remove it', function () {
        c1.setCookie('aaa','http://baidu.com?key=3&b=4#p1 ');
        c1.delCookie('aaa');
        expect(c1.getCookie('aaa')).to.be.equal('');
    });
     it('setCookie (Object)', function () {
        let aa=c1.setCookie('obj',{a:3,b:'4'});
        
        expect(c1.getCookieObject('obj').a).to.be.equal(3);
        expect(c1.getCookieObject('obj').b).to.be.equal('4');
    });
    
      it('cookie maxage 2s', function (done) {
        let aa=c2.setCookie('c2','1234asdf');
        setTimeout(function(){
            expect(c2.getCookie('c2')).to.be.equal('');
            console.log(333)
            done();
        },1800)
    });
    
    
    
});