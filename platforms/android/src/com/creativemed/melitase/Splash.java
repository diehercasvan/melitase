package com.creativemed.melitase;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.RelativeLayout;

public class Splash extends Activity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);


        new CountDownTimer(5000, 100) {
            @Override
            public void onTick(long millisUntilFinished) {

            }

            @Override
            public void onFinish() {
                startActivity();
            }
        }.start();
        RelativeLayout relativeLayout = (RelativeLayout)findViewById(R.id.container);
        relativeLayout.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        startActivity();
    }
    private void startActivity() {
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
