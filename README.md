# xml

http://tcpschool.com/xml/xml_xsd_intro 참고..
** 표준정보는 https://www.w3.org/TR/xml/ 참고

XML(EXtensible Markup Language)
	확장가능한 마크업 언어
1998년에 W3C 표준 권고안에 포함
문자 기반의 마크업 언어(text-based markup language)
사용자가 자유롭게 정의 정해진 규칙이 없다.
XML은 문서용 마크업 언어를 정의하기 위한 메타언어인 SGML(Standard Generalized Markup Language)을 기반

- XML 기반 언어
	1. XHTML
	2. SVG
	3. RDF
	4. RSS
	5. Atom
	6. MathML
- 특징
	1. XML은 다른 목적의 마크업 언어를 만드는 데 사용되는 다목적 마크업 언어입니다.
		ㄱ. XML 기초(내용) -> <title>XML 기초</title>(마크업 + 내용)
		ㄴ. 문서의 내용이 구조적 구분 가능 
	2. XML은 다른 시스템끼리 다양한 종류의 데이터를 손쉽게 교환할 수 있도록 해줍니다.
	3. XML은 HTML 처럼 정해진 태그가 아닌 새로운 태그를 만들어 추가해도 계속해서 동작하므로, 확장성이 좋습니다.
		ㄱ. HTML은 정해진 태그 이외의 항목은 사용자 마음대로 작성 할 수 없다.
		ㄴ. XML 사용자정의 DTD, Schema 사용자 마음대로 태그 정의
	4. XML은 데이터 저장, 전달 용도
	5. XML은 텍스트 데이터 형식의 언어로 모든 XML 문서는 유니코드 문자 소프트웨어나 하드웨어에 독립적으로 데이터를 저장하고 전달
	

- 구조
	1. XML은 트리구조
		ㄱ. 루트에서부터 부모, 자식, 형제 구조
	2. XML 문서임을 명시
		ㄱ. <?xml version="1.0" encoding="UTF-8" standalone="no"?>
		ㄴ. standalone은 파서가 XML 문서를 해석할때 외부 DTD 문서를  참조할지 여부를 파서에게 전달 Default = no 
	3. XML 속성
		ㄱ. XML 요소에 대한 추가적인 정보를 제공
		ㄴ. <요소이름 속성1="속성값" 속성2="속성값"... >
		ㄷ. 한개의 요소 내에 중복 불허
	4. XML NameSpace
		ㄱ. XML 네임스페이스는 XML 요소 간의 이름에 대한 충돌을 방지해 주는 방법을 제공합니다.
		ㄴ. XML 네임스페이스는 요소의 이름과 속성의 이름을 하나의 그룹으로 묶어주어 이름에 대한 충돌을 해결합니다.
		ㄷ. 이러한 XML 네임스페이스는 URI(Uniform Resource Identifiers)로 식별됩니다.
			Ex1)
				<충돌>
		   			<a>a</a>
		    		<b>b</b>
				</충돌>
			Ex2)
				<충돌>
		   			<c>c</d>
		    		<c>d</d>
				</충돌>
		ㄹ. XML 네임스페이스의 선언
			XML에서는 접두사(prefix)를 이용하여 위와 같은 이름의 충돌을 방지
			<요소이름 xmlns:prefix="URI">
			EX1)
				<ROOT>
					<a:충돌 xmlns:a="http://example1.com/xml/test">
						<a:a>a</a:a>
			    		<a:b>b</a:b>
					</a:충돌>
					<b:충돌 xmlns:b="http://example2.com/xml/test">
						<b:c>d</b:d>
			    		<b:d>d</b:d>
					</b:충돌>
				</ROOT>	
			EX2)	
				<ROOT
					xmlns:a="http://example1.com/xml/test"
					xmlns:b="http://example2.com/xml/test">	
					<a:충돌 xmlns:a="http://example1.com/xml/test">
						<a:a>a</a:a>
			    		<a:b>b</a:b>
					</a:충돌>
					<b:충돌 xmlns:b="http://example2.com/xml/test">
						<b:c>d</b:d>
			    		<b:d>d</b:d>
					</b:충돌>	
				</ROOT>
		ㅁ.	URI(Uniform Resource Identifiers)
			URI란 통합 자원 식별자를 의미하며, 인터넷에 있는 자원을 나타내는 유일한 주소를 의미합니다.
			URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에도 항상 명시됩니다.
			가장 잘 알려진 URI로는 인터넷 도메인 주소를 나타내는 URL(Uniform Resource Locator)이 있습니다.
			또 다른 URI로는 URN(Universal Resource Name)이 있습니다.
			 
- XML 파서(parser)
	XML 파서(parser)란 응용 프로그램이 XML 문서를 읽을 수 있도록 인터페이스를 제공해주는 라이브러리(library)나 패키지(package)를 의미합니다.
	XML 파서는 XML 문서가 적합한 형식을 갖추고 있는지와 문법상의 오류는 없는지를 검사합니다.
	현재 대부분의 주요 웹 브라우저는 모두 XML 파서를 내장하고 있습니다.
	동작 : XML Document -> XML Parser -> XML DOM -> 응용프로그램 -> 출력
	XML 파서가 어떤 방식으로 XML 문서와 동작하는지를 보여줍니다.
	XML 파서의 최종 목적은 XML 문서를 응용 프로그램이 읽을 수 있는 코드로 변환하는 것입니다.
	현재 많이 사용되고 있는 XML 파서의 종류는 다음과 같습니다.
	 - MSXML(Microsoft Core XML Services)
	 - System.Xml.XmlDocument
	 - Java built-in parser
	 - Saxon
	 - Xerces		

# XSD

SD는 XML 스키마 정의(XML Schema Definition)를 의미합니다.
XSD는 XML 문서의 구조 및 해당 문서가 포함할 수 있는 적법한 요소와 속성을 명시합니다.
즉, 해당 XML 문서가 유효한(valid) XML 문서로써 포함할 수 있는 관계를 정의합니다.
XML에서 스키마를 정의할 때는 XSD뿐만 아니라 앞서 배운 DTD를 사용할 수도 있습니다.
	 
- DTD, Schema 차이점
	1. DTD는 한계점이 있다.
	------------------------------------------------------------------------------	
	DTD								ㅣ	XML	
	------------------------------------------------------------------------------
	문법 SGML 문법 준수					ㅣ	XML 문법 준수
	네임스페이스 지원						ㅣ	지원하지 않음 지원함
	지원 데이터 형식 단순한 텍스트 데이터 형식 지원 	ㅣ	다양한 빌트인 데이터 형식과 사용자 지정 데이터 형식을 지원
	반복 연산자 지원 0회, 1회, n회 반복 지원 	ㅣ	최소 반복 횟수와 최대 반복 횟수를 다양하게 저정 가능
	표준화 단계 W3C 표준(1999년) 			ㅣ	W3C 표준(2001년)
	2. XSD 정수, 문자열 등의 다양한 타입을 지원합니다. 	 

Ex1)
<?xml version="1.0" encoding="UTF-8" ?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
    targetNamespace="http://codingsam.com"
    xmlns="http://codingsam.com"
    elementFormDefault="qualified">
</xs:schema>

<요소 속성="속성명">
xmlns:xs 		: 속성은 요소와 타입에 사용할 XML의 네임 스페이스
targetNamespace : 요소를 정의 할 XML 스키마 네임 스페이스
xmlns			: 기본 스키마 네임스페이스 
elementFormDefault : 해당 스키마를 이용해 선언한 XML의 모든 요소 만족한다는것을 명시

- Well-Formed XML Document
- Valid 문서
	1. 사용자정의(DTD, Schema)에서 작성한 규칙을 따르는