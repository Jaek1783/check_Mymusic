'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import classes from './MymusicConfirm.module.css'
import Link from 'next/link';

const MymusicConfirm = () => {
  const [quest, setQuest] = useState({
    quest1 : '',
    quest2 : '',
    quest2_1 : '',
    quest3 : ''
  });
  const [answer, setAnswer] = useState('');
  
  //라디오버튼 이벤트
  const onChangeQuest = (e:ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;

    const checkBox = document.querySelectorAll('input');
    const arr = [...checkBox]
    arr.map(el => {if(el.name === name)el.disabled = true})
    setQuest({...quest, [name]: value})
  }

  useEffect(()=>{
    if(quest.quest1 === '2' || quest.quest2 === '4' || quest.quest2_1 === '2' || quest.quest3 === '3' ){
      setAnswer('a')
    }else if (quest.quest1 === '' && quest.quest2 === '' && quest.quest2_1 === '' && quest.quest3 === '' ){
      setAnswer('')
    }else if (quest.quest2 === '3' || quest.quest3 === '1' || quest.quest3 === '2'){
      setAnswer('b')
    }else {
      setAnswer('')
    }
  },[quest])

  //취소버튼 이벤트
  const cancel = ()=>{
    setAnswer('')
  }
  //다시하기 버튼 이벤트
  const reset = ()=>{
    setAnswer('reset');
    setQuest({
      quest1:'',
      quest2:'',
      quest2_1:'',
      quest3:''
    })
    const checkBox = document.querySelectorAll('input');
    checkBox.forEach(el => el.checked = false)
    checkBox.forEach(el => el.disabled = false)

  }
  return ( 
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 >음악 공연권료 납부 대상 확인 안내</h1>
        <p>{`저작권법 시행령이 개정(2017.8.22) 됨에 따라 
          2018년 8월 23일 이후 부터는
          휴게음식점(커피전문점, 기타 비알콜음료점),
          일반음식점(생맥주전문점, 기타 주점),
          체력단련장은 음악 공연권료(사용료, 보상금)
          를 납부하셔야 하오니 아래를 클릭하셔서 대상 여부를 확인하세요.`}
        </p>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th><h2>음악 공연권료 납부 대상 확인</h2></th>
            <th>{`샘플보기)`} {<Link href="https://www.copyright.or.kr/images/bz_cert.html" target='blank'>영업신고증 </Link>} / {<Link href="https://www.copyright.or.kr/images/sports_cert.html" target='blank'>체육시설업 신고증명서</Link>}</th>
          </tr>

        </thead>
        <tbody className={classes.contents}>
          <tr className={`${classes.quest1} ${classes.quest}`}>
            <th> 1. 지방지방자치단체에 신고하고 발급 받은 
              <span className={classes.blue}>영업신고증</span> 
              상의 영업장 면적 크기는 얼마입니까?
            </th>
            <td>
              <div className={classes.inputBox}>
                <label htmlFor="quest1_1">
                <input type="radio" id='quest1_1' name='quest1' value="1" onChange={(e)=>{onChangeQuest(e)}}/>
                  50㎡이상
                </label>
              </div>
           <div className={classes.inputBox}>
              <label htmlFor="quest1_2">
                <input type="radio" id='quest1_2' name='quest1' value="2"  onChange={(e)=>{onChangeQuest(e)}}/>
                50㎡미만
              </label>
           </div>
          </td>
          </tr>
          {quest.quest1 === '1' ? ( 
          <tr className={`${classes.quest2} ${classes.quest}`}>
            <th> 2. 지방자치단체에 신고하고 발급 받은 
              <span className={classes.blue}>영업신고증</span> 또는
              <span className={classes.blue}>체육시설업 신고증명서</span> 
              상의 영업 형태는 무엇 입니까?
            </th>
            <td>
              <div className={classes.inputBox}>
                <label htmlFor="quest2_1">
                <input type="radio" id='quest2_1' name='quest2' value="1" onChange={(e)=>{onChangeQuest(e)}}/>
                1. 영업의 종류가 식품접객업으로 되어 있으며 영업의 형태가 <span className={classes.red}>휴게음식점</span>
                </label>
              </div>
            <div className={classes.inputBox}>
              <label htmlFor="quest2_2">
              <input type="radio" id='quest2_2' name='quest2' value="2" onChange={(e)=>{onChangeQuest(e)}}/>
              2. 영업의 종류가 식품접객업으로 되어 있으며 영업의 형태가 <span className={classes.red}>일반음식점</span>
              </label>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="quest2_3">
              <input type="radio" id='quest2_3' name='quest2' value="3" onChange={(e)=>{onChangeQuest(e)}}/>
              3. 체육시설업 신고증명서 상의 업종이 <span className={classes.red}>체력단련장</span>
              </label>
            </div>
            <div className={classes.inputBox}>
              <label htmlFor="quest2_4">
              <input type="radio" id='quest2_4' name='quest2' value="4" onChange={(e)=>{onChangeQuest(e)}}/>
              4. 1~3에 해당되지 않음
              </label>
            </div>
          </td>
          </tr>):null}
          <tr className={`${classes.info}`}>
            <th>{`<설 명>`}</th>
            <td>* 식품위생법 시행령 제21조제8호에 따른 휴게음식점 및 일반음식점은 동법 제25조에 의거하여 특별자치시장·특별자치도지사 또는 시장·군수·구청장에게 영업을 신고해야 하는 업종입니다.</td>
            <td>* 체육시설의 설치·이용에 관한 법률 시행령 별표 1의 체력단련장은 동법 제20조에 의거하여 특별자치시장·특별자치도지사 또는 시장·군수·구청장에게 신고해야 하는 업종입니다.</td>
            <td>해당 예시는 행정안전부의 지방자치단체에서 인허가하는 업종별 데이터 개방 홈페이지에서 식품과 체력단련장에서 확인 할 수 있습니다.</td>
          </tr>
          {quest.quest1 === '1' && quest.quest2 === '1' ?
            (<tr className={`${classes.quest3} ${classes.quest}`}>
            <th>
            3. 지방자치단체에 신고하고 발급 받은 
            <span className={classes.blue}>영업신고증</span>상의 
            <span className={classes.red}>휴게음식점</span>
            으로 신고하신 업체 중 
            <span className={classes.blue}>한국표준산업분류코드</span>
            에 따른 
            <span className={classes.red}>커피 전문점, 기타 비알콜 음료점</span>
            으로 영업하고 있으신가요?
            </th>
              <td>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_1">
                    <input type="radio" id='quest3_1' name='quest3' value='1' onChange={(e)=>onChangeQuest(e)}/>
                    <div>
                      <div className={classes.red}>1. 커피 전문점</div>
                      볶은 원두, 가공 커피류 등을 이용하여 생산한 
                      <div className={classes.red}>{`커피 음료를 전문적으로 판매(포장판매 포함)`}
                      <span>하는 커피전문점</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_2">
                    <input type="radio" id='quest3_2' name='quest3' value='2' onChange={(e)=>onChangeQuest(e)}/>
                    <div>
                      <div className={classes.red}>2. 기타 비알코올 음료점</div>
                      주스, 인스턴트 커피, 홍차, 생강차, 쌍화차 등 
                      <div className={classes.red}>{`비알코올 음료를 판매(포장판매 포함)`}
                      <span>하는 음료점</span>
                      </div>
                      <div>
                        {`* 간이찻집, 과일주스 전문점, 국산찻집, 다방,
                        다실, 비알코올 음료점, 생과일주스 전문점, 생과일주스 전문점(고정 매장),`}<br/> 
                        이동식 냉차 판매, 인삼찻집, 주스 전문점, 찻집, 커피다방
                      </div>
                    
                    </div>
                  </label>
                </div>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_3">
                    <input type="radio" id='quest3_3' name='quest3' value='3' onChange={(e)=>onChangeQuest(e)} />
                    1~2에 해당되지 않음
                  </label>
                </div>
              </td>
          </tr>) : quest.quest2 === '2' ? (
            <tr className={`${classes.quest2_1} ${classes.quest}`}>
              <th>
                <p>2-1. 귀 업체는 접객시설을 갖추고 계십니까?</p>
                <span>{`(※ 접객시설: 탁자, 의자 등 고객이 음용할 수 있는 시설)`}</span>
              </th>
              <td>
              <div className={classes.inputBox}>
                <label htmlFor="quest2_1_1">
                <input type="radio" id='quest2_1_1' name='quest2_1' value="1" onChange={(e)=>{onChangeQuest(e)}}/>
                  접객시설 있음
                </label>
              </div>
           <div className={classes.inputBox}>
              <label htmlFor="quest2_1_2">
                <input type="radio" id='quest2_1_2' name='quest2_1' value="2"  onChange={(e)=>{onChangeQuest(e)}}/>
                접객시설 없음
              </label>
           </div>
          </td>
            </tr>
          ) : null
          }
          {quest.quest2_1 === '1' ?
            (<tr className={`${classes.quest3} ${classes.quest}`}>
            <th>
            3.
            <span className={classes.blue}>영업신고증</span>상의 
            <span className={classes.red}>일반음식점</span>
            으로서
            <span className={classes.blue}>한국표준산업분류코드</span>
            에 따라
            <span className={classes.red}>생맥주 전문점, 기타주점</span>
            으로 영업하고 있으신가요?
            </th>
              <td>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_1">
                    <input type="radio" id='quest3_1' name='quest3' value='1' onChange={(e)=>onChangeQuest(e)}/>
                    <div>
                      <div className={classes.red}> 1. 생맥주 전문점</div>
                      <span className={classes.red}>접객시설</span>
                      을 갖추고 대중에게 주로 
                      <span className={classes.red}>생맥주</span>
                      를 전문적으로 판매하는 주점
                      <div>※ 치킨전문점은 공연권료 납부 대상에 해당되지 않음</div>
                    </div>
                  </label>
                </div>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_2">
                    <input type="radio" id='quest3_2' name='quest3' value='2' onChange={(e)=>onChangeQuest(e)}/>
                    <div>
                      <div className={classes.red}>2. 기타주점</div>
                      생맥주 전문점을 제외한 대폿집, 선술집 등과 같이 
                      <span className={classes.red}>접객시설</span>
                      을 갖추고 대중에게 
                      <span>술을 판매</span>
                      하는 기타의 주점
                      <div>{`* 가라오케(접객서비스 없음), 간이주점(소주방 등), 
                      단란주점(접객서비스 없음), 막걸리집, 민속주점, 사케 전문점,
                      선술집(고정식), 소주방, 와인바, 토속주점(막걸리, 동동주 등)`}
                      </div>
                      <div>
                        {`* 간이찻집, 과일주스 전문점, 국산찻집, 다방,
                        다실, 비알코올 음료점, 생과일주스 전문점, 생과일주스 전문점(고정 매장),`}<br/> 
                        이동식 냉차 판매, 인삼찻집, 주스 전문점, 찻집, 커피다방
                      </div>
                    </div>
                  </label>
                </div>
                <div className={`${classes.inputBox}`}>
                  <label htmlFor="quest3_3">
                    <input type="radio" id='quest3_3' name='quest3' value='3' onChange={(e)=>onChangeQuest(e)} />
                    1~2에 해당되지 않음
                  </label>
                </div>
              </td>
          </tr>) : null }
        </tbody>
      </table>
      {quest.quest1 !== '' ? <div className={classes.btn}>
              <button onClick={reset} className={classes.reset}>처음부터 다시하기</button> 
      </div>: null}
         {answer === '' ? null : answer === 'a' ? (
          <div className={classes.answer}>
            <div>
                  <h2>납부대상 확인</h2>
                  <div>
                    <p>귀 업체는 이번에 확대되는 
                    <span className={classes.red}>공연권료 납부 대상이 아닙니다.</span></p>
                    <button onClick={cancel}>확인</button>
                  </div>

            </div>
          </div>
        ) : answer === 'b' ?  (
          <div className={classes.answer}>
            <div>
                <h2>납부대상 확인</h2>
                <div>
                  <p>
                  귀 업체는 이번에 확대되는 
                  <span className={classes.red}>공연권료 납부 대상입니다.</span>
                  </p>
                  납부 방법 등은 
                  <span className={classes.kakao}>카카오톡</span>
                  으로 문의하여 주시기 바랍니다.
                  <button onClick={cancel}>확인</button>
                </div>
            </div>
          </div>
        ) : null }
    </div>
   );
}
 
export default MymusicConfirm;