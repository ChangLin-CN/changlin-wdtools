describe('Cookie', function () {
    
    it('setCookie and get it', function () {
        wdtools.setCookie('aaa', 'http://baidu.com?key=3&b=4#p1 ');
        expect(wdtools.getCookie('aaa')).to.be.equal('http://baidu.com?key=3&b=4#p1 ');
    });
    it('setCookie and remove it', function () {
        wdtools.setCookie('aaa', 'http://baidu.com?key=3&b=4#p1 ');
        wdtools.deleteCookie('aaa');
        expect(wdtools.getCookie('aaa')).to.be.equal('');
    });
    it('setCookie (Object)', function () {
        let aa = wdtools.setCookie('obj', {a: 3, b: '4'});
        
        expect(wdtools.getCookieObject('obj').a).to.be.equal(3);
        expect(wdtools.getCookieObject('obj').b).to.be.equal('4');
    });
    
    it('cookie maxage 2s', function (done) {
        wdtools.setCookieDefaultConfig({
            maxAge: 1
        });
        let aa = wdtools.setCookie('c2', '1234asdf');
        setTimeout(function () {
            expect(wdtools.getCookie('c2')).to.be.equal('');
            done();
        }, 1800)
    });
    
    
});

describe('search', function () {
    it('searchParse', function () {
        let obj = wdtools.searchParse('?a=1234&b&c=12%26%3D%3F%3A');
        expect(obj.a).to.be.equal('1234');
        expect(obj.b).to.be.equal(true);
        expect(obj.c).to.be.equal('12&=?:');
    });
  
    it('searchParse error', function () {
        expect(function () {
            wdtools.searchParse(1234);
        }).to.throw(Error);
    });
    
    it('searchStringify', function () {
        let obj  = {
            a: '1234',
            b: true,
            c: '12&=?:'
        };
        let obj2 = {
            a: '1234',
            b: "",
            c: '12&=?:'
        };
        expect(wdtools.searchStringify(obj)).to.be.equal('a=1234&b&c=12%26%3D%3F%3A');
        expect(wdtools.searchStringify(obj2)).to.be.equal('a=1234&b=&c=12%26%3D%3F%3A');
        
    });
    
    it('searchStringify error', function () {
        
        expect(function () {
            wdtools.searchStringify([]);
        }).to.throw(Error);
        // expect(function () {
        //     wdtools.searchStringify(1234);
        // }).to.throw(Error);
    });
    
    it('searchExtend', function () {
        const str  = '?a=1234&b=4567',
              obj  = {b: 9999, c: '12&=?:'},
              str2 = 'b=3333&d=4444';
        
        let res = wdtools.searchParse(wdtools.searchExtend(str, obj, str2));
        
        
        expect(res.a).to.be.equal('1234');
        expect(res.b).to.be.equal('3333');
        expect(res.c).to.be.equal('12&=?:');
        expect(res.d).to.be.equal('4444');
        
        
    });
    
});

describe('url', function () {
    it('getAbsoluteURL error', function () {
        expect(function () {
            wdtools.getAbsoluteURL(1234);
        }).to.throw(Error);
    });
    it('getAbsoluteURL error', function () {
        expect(function () {
            wdtools.getAbsoluteURL();
        }).to.throw(Error);
    });
    it('getAbsoluteURL', function () {
        expect(
            wdtools.getAbsoluteURL('/abc')
        ).to.be.equal(window.location.origin + '/abc');
    });
    
    
});
