export default function(){  
  this.transition(
    this.fromRoute('index'),
    this.toRoute('friends.new'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('index'),
    this.toRoute('friends'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('friends'),
    this.toRoute('friends.new'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}