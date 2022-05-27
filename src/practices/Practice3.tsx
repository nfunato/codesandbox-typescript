export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: number = 0; // ここに型指定がある(reactでならuseStateの受け側)
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>Exercises: 返却値の型指定</p>
      <button onClick={onClickPractice}>Ex3を実行</button>
    </div>
  );
};
