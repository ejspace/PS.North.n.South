#pragma strict

private var Health:int = 5;

function Start () {

}

function Update () {

}


function OnTriggerEnter (other : Collider) 
{
	Health--;
	if (Health<=0)
		Destroy(this.gameObject);
}