export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  //  const onClickPractice = () => calcTotalFee("1,000");
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>Exercises: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>Ex4を実行</button>
    </div>
  );
};
