export default function() {
  this.transition(
    this.childOf('.score'),
    this.use('toUp')
  );
}
