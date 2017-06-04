import { Component, OnInit } from '@angular/core';
import { SpeechToTextV1 } from 'watson-developer-cloud/speech-to-text/v1';
import { mic } from 'mic';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mic: any = mic;
  sttParams: any = {
    content_type: 'audio/l16; rate=16000; channels=1',
    interim_results: true,
    smart_formatting: true
  };
  speech: any = new SpeechToTextV1({
      username: environment.username,
      password: environment.password,
      headers: {
        "X-Watson-Learning-Opt-Out": true
      }
  });
  micInstance: any = this.mic({ 'rate': '16000', 'channels': '1', 'debug': true, 'exitOnSilence': 6 });
  micStream: any = this.micInstance.getAudioStream();
  textStream: any = this.micStream.pipe(
    this.speech.createRecognizeStream(this.sttParams)
  ).setEncoding('utf8');

  ngOnInit(){
    this.micInstance.start();
    this.textStream.on('data', function(user_speech){
      console.log('watson hears: ' + user_speech);
    });
  }

  constructor(){}




}
